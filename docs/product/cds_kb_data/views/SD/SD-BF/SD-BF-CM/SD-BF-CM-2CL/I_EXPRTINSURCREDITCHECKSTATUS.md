---
name: I_EXPRTINSURCREDITCHECKSTATUS
description: "Exprtinsurcreditcheckstatus"
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - status
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_EXPRTINSURCREDITCHECKSTATUS

**Exprtinsurcreditcheckstatus**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExprtInsurCreditCheckStatus` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ExprtInsurCreditCheckStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'ExprtInsurCreditCheckStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Export Credit Insurance Credit Check Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDEINSCRDCKSTS'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'ExprtInsurCreditCheckStatus'

define view I_ExprtInsurCreditCheckStatus
as select from dd07l

association [0..*] to I_ExprtInsurCreditCheckStatusT as _Text on $projection.ExprtInsurCreditCheckStatus = _Text.ExprtInsurCreditCheckStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as ExprtInsurCreditCheckStatus,
    
    //Associations
    _Text
}
where (dd07l.domname = 'CMPSZ') and (dd07l.as4local = 'A');
```
