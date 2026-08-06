---
name: I_BR_NFEMODTEXT
description: BR Nfemodtext
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEMODTEXT

**BR Nfemodtext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `spras` |
| key `BR_NFeTextNumber` | `textnum` |
| `BR_NFeSortDescription` | `text` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFEMODTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AccessControl.authorizationCheck: #CHECK
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Brazil Nota Fiscal Modelo 1 and 2 - Text'

define view I_BR_NFeModText   
    as select from j_1bmodtext
{
  key spras   as Language,
  key textnum as BR_NFeTextNumber,
      text    as BR_NFeSortDescription
}
```
