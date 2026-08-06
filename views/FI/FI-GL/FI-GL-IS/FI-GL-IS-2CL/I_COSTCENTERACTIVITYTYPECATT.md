---
name: I_COSTCENTERACTIVITYTYPECATT
description: Cost CenterACTIVITYTYPECATT
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - cost-center
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CostCenter
---
# I_COSTCENTERACTIVITYTYPECATT

**Cost CenterACTIVITYTYPECATT**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CostCtrActivityTypeCategory` | `cast( domvalue_l as latyp )` |
| key `Language` | `cast( ddlanguage as spras )` |
| `CostCtrActivityTypeCatName` | `cast(ddtext as fis_latyp_text)` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CostCtrActivityTypeCategory'
@EndUserText.label: 'Category of Activity Type - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICCACTTYPCATT'
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #META
@AbapCatalog.buffering: {type: #NONE, numberOfKeyFields: 0, status: #NOT_ALLOWED}
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]

define view I_CostCenterActivityTypeCatT as select from dd07t 
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    key cast( domvalue_l as latyp ) as CostCtrActivityTypeCategory, 
    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key cast( ddlanguage as spras ) as Language, 
    @Semantics.text
    cast(ddtext as fis_latyp_text) as CostCtrActivityTypeCatName,
    _Language
    
}
where domname = 'LATYP' and as4local = 'A';
```
