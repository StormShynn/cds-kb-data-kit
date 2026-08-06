---
name: I_EG_EDOCTAXCATWITHHOLDINGCODE
description: EG Edoctaxcatwithholdingcode
app_component: CA-GTF-CSC-EDO-EG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - tax
  - component:CA-GTF-CSC-EDO-EG
  - lob:Cross-Application Components
---
# I_EG_EDOCTAXCATWITHHOLDINGCODE

**EG Edoctaxcatwithholdingcode**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-EG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EG_EDocWhgdTxCode` | `EG_EDocWhgdTxCode` |
| `EG_EDocTaxType` | `EG_EDocTaxType` |
| `EG_EDocTaxSubtype` | `EG_EDocTaxSubtype` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument Egypt Tax Cat for WHT Code'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@ObjectModel:{
 usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER
},
supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #UI_PROVIDER_PROJECTION_SOURCE ]
                           }
define view entity I_EG_EDocTaxCatWithholdingCode as select from R_EG_EDocTaxCatWithholdingCode
{
  key EG_EDocWhgdTxCode,
  EG_EDocTaxType,
  EG_EDocTaxSubtype
}
```
