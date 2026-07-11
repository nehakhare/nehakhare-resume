export const resumeHtml = `
<div class="page">
  <header>
    <img class="headshot" src="/headshot.png" alt="Neha Khare" />
    <h1>Neha Khare</h1>
    <div class="title">Software Engineer II</div>
  </header>
  <div class="contact">
    Redmond, WA &nbsp;|&nbsp; (513) 293-0257 &nbsp;|&nbsp;
    <a href="mailto:kharena@mail.uc.edu">kharena@mail.uc.edu</a> &nbsp;|&nbsp;
    <a href="https://www.linkedin.com/in/neha-khare-726a7342/">linkedin.com/in/neha-khare</a>
  </div>

  <section>
    <h2>Summary</h2>
    <p class="summary">
      Software Engineer II with 10+ years of experience building and operating cloud-native
      services and data platforms at scale. Currently in Microsoft's Azure Customer Experience
      Platform (CXP), driving reliability, performance, and compliance across customer-facing
      services in Engage Center. Strong background in distributed systems, service modernization,
      large-scale data processing, and cross-team collaboration across engineering, PM, support,
      and privacy. Passionate about solving real-world problems in core software engineering,
      big data, and cloud technologies.
    </p>
  </section>

  <section>
    <h2>Professional Experience</h2>

    <div class="job">
      <div class="job-head">
        <span><span class="role">Software Engineer II</span> &mdash;
          <span class="company">Microsoft, Azure Customer Experience Platform (Engage Center / Aries)</span></span>
        <span class="dates">October 2021 &ndash; Present</span>
      </div>
      <div class="loc">Redmond, WA</div>
      <ul>
        <li><span class="subgroup">Customer Activity (CPOE):</span> Developed and maintained a
          customer-facing reporting and analytics experience surfacing service consumption, support
          cases, learning, and agreement data. Shipped multiple production fixes (multi-agreement
          selection, consumption reporting accuracy, hours/minutes conversion, Partner Cases
          authorization resiliency), advancing service SLO and incident-mitigation goals.</li>
        <li><span class="subgroup">Data discrepancy triage:</span> Established a repeatable process
          for validating customer-reported discrepancies against source-of-truth systems (CDS,
          Support Delivery), demonstrating that many reported defects were expectation mismatches
          rather than product bugs and reducing engineering time spent on false positives.</li>
        <li><span class="subgroup">Phoenix performance optimization:</span> Diagnosed a bottleneck
          where validation for &lt;100 component codes returned tens of thousands of records; drove
          batch-lookup, caching, and ingestion-reuse strategy to cut API call volume and throttling risk.</li>
        <li><span class="subgroup">Newsletter Service modernization:</span> Supported migration of
          newsletter functionality from legacy Services Hub into Engage Center, investigated
          large-scale subscriber migration issues, and coordinated live-site (Sev-3) incident response.</li>
        <li><span class="subgroup">GDPR / EU Data Boundary (EUDB):</span> Contributed to privacy and
          compliance initiatives &mdash; regional data separation design, data classification, and
          multi-region deployment readiness; drove GDPR reviewer/ownership updates.</li>
        <li><span class="subgroup">Reliability &amp; operations:</span> Owned production deployments and
          release approvals, investigated live-site incidents (IcM), led root-cause analysis, and
          built monitoring/knowledge-sharing improvements to reduce recurring customer issues.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-head">
        <span><span class="role">Software Developer</span> &mdash;
          <span class="company">Cerner Corporation (Revenue Cycle)</span></span>
        <span class="dates">April 2020 &ndash; October 2021</span>
      </div>
      <div class="loc">Kansas City, MO</div>
      <ul>
        <li>Built scheduling features for Authorizations, enabling users to select appointment
          date/time based on Service Level Agreements across multiple workflows, using Java and React.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-head">
        <span><span class="role">Software Developer Intern</span> &mdash;
          <span class="company">Syneren Technologies</span></span>
        <span class="dates">July 2019 &ndash; December 2019</span>
      </div>
      <div class="loc">Virginia, US</div>
      <ul>
        <li>Developed the System Analysis Tool (SAT) performing Business Case Analysis to evaluate
          approved cloud hosting alternatives ahead of application migration, using Python, Flask,
          SQLAlchemy, Bootstrap, and HTML5/CSS3.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-head">
        <span><span class="role">Software Developer</span> &mdash;
          <span class="company">Sears Holdings (Sears &amp; Kmart Online)</span></span>
        <span class="dates">June 2014 &ndash; July 2018</span>
      </div>
      <div class="loc">India</div>
      <ul>
        <li>Maintained the Sears and Kmart websites, triaging ServiceNow issues and collaborating
          with QA; extensive development and analysis reduced and closed the issue backlog by 70%.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Technical Skills</h2>
    <div class="skills-grid">
      <div class="k">Languages</div>
      <div>C# / .NET, Java, Python, JavaScript (ES6), SQL, PowerShell, HTML, CSS</div>
      <div class="k">Cloud &amp; Platform</div>
      <div>Azure Service Fabric, Cosmos DB, Azure Front Door, Service Bus, Managed Identity,
        multi-region deployments (Global + EUDB), AWS EC2</div>
      <div class="k">Data &amp; Analytics</div>
      <div>Azure Data Explorer (Kusto), data migration &amp; validation, telemetry analytics,
        MapReduce, Hive, big-data processing</div>
      <div class="k">Reliability &amp; Ops</div>
      <div>Geneva (logs/actions), Grafana, Jarvis tracing, IcM, S360, SLO/SLA monitoring,
        production diagnostics</div>
      <div class="k">Eng Systems</div>
      <div>Azure DevOps (Boards, Repos, Pipelines), OneBranch, EV2, SafeFly, CI/CD, release
        management, JIT elevation</div>
      <div class="k">Frameworks</div>
      <div>React, Spring Boot, Flask, RESTful API design, Docker, SQLAlchemy</div>
      <div class="k">Foundations</div>
      <div>Distributed systems, object-oriented design, data structures &amp; algorithms,
        database theory</div>
    </div>
  </section>

  <section>
    <h2>Education</h2>
    <div class="edu-item">
      <div class="edu-head">
        <span class="deg">Master of Engineering, Computer Science &mdash; University of Cincinnati, OH</span>
        <span class="dates">Aug 2018 &ndash; Dec 2019</span>
      </div>
      <div class="edu-sub">GPA 3.91 &middot; Coursework: Advanced Algorithms, Cloud Computing,
        Machine Learning, Artificial Intelligence, Database Theory</div>
    </div>
    <div class="edu-item">
      <div class="edu-head">
        <span class="deg">Bachelor of Engineering, Computer Science &mdash; Rajiv Gandhi Technical University, India</span>
        <span class="dates">May 2010 &ndash; May 2014</span>
      </div>
      <div class="edu-sub">Coursework: Programming, Data Structures &amp; Algorithms, Operating
        Systems, Computer Networks</div>
    </div>
  </section>

  <section>
    <h2>Selected Projects</h2>
    <ul>
      <li><span class="subgroup">Big Data Weather Analysis:</span> Data analysis and processing
        pipeline over 19 years (2000&ndash;2019) of NOAA GHCN station data using MapReduce and Hive,
        surfacing average and median statistics.</li>
      <li><span class="subgroup">Weather Forecast REST API:</span> Java/Spring Boot RESTful API
        hosted on AWS EC2 with 5-day forecast visualizations, packaged and shared as a Docker
        container image.</li>
    </ul>
  </section>
</div>
`;
