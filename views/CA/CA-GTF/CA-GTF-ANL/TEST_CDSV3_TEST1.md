---
name: TEST_CDSV3_TEST1
description: "Test Cdsv 3 Test 1"
app_component: CA-GTF-ANL
software_component: SAPPCORE_H
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-ANL
  - component:CA-GTF-ANL
  - lob:Cross-Application Components
---
# TEST_CDSV3_TEST1

**Test Cdsv 3 Test 1**

| Property | Value |
|---|---|
| App Component | `CA-GTF-ANL` |
| Software Component | `SAPPCORE_H` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Source Code

```abap
GetSource failed: getting DDLS source: ADT API error: status 404 at /sap/bc/adt/ddic/ddl/sources/TEST_CDSV3_TEST1/source/main: <?xml version="1.0" encoding="utf-8"?><exc:exception xmlns:exc="http://www.sap.com/abapxml/types/communicationframework"><namespace id="com.sap.adt"/><type id="ExceptionResourceNotFound"/><message lang="EN">Data definition TEST_CDSV3_TEST1 of version  does not exist</message><localizedMessage lang="EN">Data definition TEST_CDSV3_TEST1 of version  does not exist</localizedMessage><properties><entry key="T100KEY-ID">DDIC_ADT_DDLS</entry><entry key="T100KEY-NO">002</entry><entry key="T100KEY-V1">TEST_CDSV3_TEST1</entry></properties></exc:exception>
```
