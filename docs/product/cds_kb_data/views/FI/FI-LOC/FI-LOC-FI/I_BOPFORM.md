---
name: I_BOPFORM
description: "Bopform"
app_component: FI-LOC-FI
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - component:FI-LOC-FI
  - lob:Finance
---
# I_BOPFORM

**Bopform**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BOPRptgCntry` | ✓ | |  | `country` |  |  |
| `BOPForm` | ✓ | |  | `form` |  |  |
| `_BOPRptgCntry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BOPRptgCntry` | `I_Country` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Balance of Payments Form' 
@AbapCatalog.sqlViewName: 'IBOPFORM' 
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION 
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ClientHandling: { type: #CLIENT_DEPENDENT, algorithm: #SESSION_VARIABLE }
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #B }
@ObjectModel.representativeKey: 'BOPForm'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_BOPForm as

select from glo_t_bopform
 
association [0..1] to I_Country as _BOPRptgCntry on $projection.BOPRptgCntry = _BOPRptgCntry.Country  

{
 
  @ObjectModel.foreignKey.association: '_BOPRptgCntry'  
  key country as BOPRptgCntry,
  key form    as BOPForm,

  _BOPRptgCntry  

}
```
