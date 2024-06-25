"use client";

import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [headers, setHeaders] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchHeaders = async () => {
      const response = await fetch('/api/headers');
      const data = await response.json();
      setHeaders(data);
    };

    fetchHeaders();
  }, []);

  return (
    <div>
      <h1>Headers Forwarded by CloudFront</h1>
      <pre>{JSON.stringify(headers, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
