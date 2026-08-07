---
name: I_BOPFORMTOCNTRY
description: Bopformtocntry
app_component: FI-LOC-FI
software_component: SAPSCORE
release_state: released
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
# I_BOPFORMTOCNTRY

**Bopformtocntry**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BOPRptgCntry` | ✓ | |  | `country` |
| `BOPForm` | ✓ | |  | `form` |
| `Country` | ✓ | |  | `cast(subdiv as land1_gp)` |
| `_BOPRptgCntry` | | ✓ | | |
| `_BOPForm` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BOPRptgCntry` | `I_Country` | [0..1] |
| `_BOPForm` | `I_BOPForm` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Balance of Payments Form To Country/Reg' 
@AbapCatalog.sqlViewName: 'IBOPFORM2CNTRY' 
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ClientHandling: { type: #CLIENT_DEPENDENT, algorithm: #SESSION_VARIABLE }
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #B }
@ObjectModel.representativeKey: 'Country'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_BOPFormToCntry as

select from glo_t_bopsubdiv

association [0..1] to I_Country as _BOPRptgCntry on $projection.BOPRptgCntry = _BOPRptgCntry.Country  
association [0..1] to I_BOPForm as _BOPForm      on $projection.BOPRptgCntry = _BOPForm.BOPRptgCntry and 
                                                    $projection.BOPForm      = _BOPForm.BOPForm 
                                                          
{
   
  @ObjectModel.foreignKey.association: '_BOPRptgCntry'  
  key country as BOPRptgCntry,
  @ObjectModel.foreignKey.association: '_BOPForm' 
  key form    as BOPForm,
  key cast(subdiv as land1_gp) as Country,

  _BOPRptgCntry,
  _BOPForm  
     
}
```
