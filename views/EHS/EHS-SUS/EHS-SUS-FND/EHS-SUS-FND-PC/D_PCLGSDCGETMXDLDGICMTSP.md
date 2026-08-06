---
name: D_PCLGSDCGETMXDLDGICMTSP
description: D Pclgsdcgetmxdldgicmtsp
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETMXDLDGICMTSP

**D Pclgsdcgetmxdldgicmtsp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `bukrs` |
| `ProdCmplncLogsDocumentCategory` | `ehfnd_log_doc_category` |
| `DepartureCountry` | `ehfnd_departure_country` |
| `DestinationCountry` | `ehfnd_destination_country` |
| `DngrsGoodsMainModeOfTransport` | `ehfnd_req_mot` |
| `D_PCLgsDcGetMxdLdgIcmtsCntryP` | `_TransitCountries : composition[0..*] of D_PCLgsDcGetMxdLdgIcmtsCntryP` |
| `D_PCLgsDcGetMxdLdgIcmtsProdP` | `_Products : composition[0..*] of D_PCLgsDcGetMxdLdgIcmtsProdP` |

## Source Code

```abap
@EndUserText.label: 'Get Mixed Loading Incompatibilities P'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define root abstract entity D_PCLgsDcGetMxdLdgIcmtsP
{
  CompanyCode                    : bukrs; //  char(4)  Company Code
  ProdCmplncLogsDocumentCategory : ehfnd_log_doc_category; // char(2)  Logistics Document Category
  DepartureCountry               : ehfnd_departure_country; // char(3)  Country/Region Key
  DestinationCountry             : ehfnd_destination_country; //  char(3)  Country/Region Key
  DngrsGoodsMainModeOfTransport  : ehfnd_req_mot; //  char(10)  Mode of Transport According to Dangerous Goods Regulations
  _TransitCountries : composition[0..*] of D_PCLgsDcGetMxdLdgIcmtsCntryP  ;  // ttyp  Transit Countires of Incompatibility Determination
  _Products  : composition[0..*] of D_PCLgsDcGetMxdLdgIcmtsProdP ;  // ttyp  Products of Incompatibility Determination

}
```
