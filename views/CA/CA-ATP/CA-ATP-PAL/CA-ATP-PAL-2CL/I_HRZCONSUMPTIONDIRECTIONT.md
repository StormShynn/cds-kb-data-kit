---
name: I_HRZCONSUMPTIONDIRECTIONT
description: Hrzconsumptiondirectiont
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - interface-view
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# I_HRZCONSUMPTIONDIRECTIONT

**Hrzconsumptiondirectiont**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `HorizontalConsumptionDirection` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as horizontalconsumptiondirection preserving type )` |
| `Language` | ✓ | |  | `ddlanguage` |
| `HorizontalCnsmpnDirectionDesc` |  | |  | `cast( ddtext as horizontalcnsmpndirectiondesc preserving type )` |
| `_Language` | | ✓ | | |
| `_HrzConsumptionDirection` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_HrzConsumptionDirection` | `I_HrzConsumptionDirection` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Horizontal Consumption Direction - Text' 
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.representativeKey: 'HorizontalConsumptionDirection'
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@AbapCatalog.sqlViewName: 'IPALHZCSPMDIRT'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]
@Metadata.ignorePropagatedAnnotations: true
define view I_HrzConsumptionDirectionT  
   as select from dd07t
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   association [1..1] to I_HrzConsumptionDirection as _HrzConsumptionDirection 
      on $projection.HorizontalConsumptionDirection = _HrzConsumptionDirection.HorizontalConsumptionDirection
{
 @ObjectModel.foreignKey.association: '_HrzConsumptionDirection'
    key cast ( substring( domvalue_l, 1, 2 ) as horizontalconsumptiondirection preserving type ) as HorizontalConsumptionDirection,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as horizontalcnsmpndirectiondesc preserving type ) as HorizontalCnsmpnDirectionDesc, 
    _HrzConsumptionDirection,
    _Language 
}
where domname = 'HORIZONTALCONSUMPTIONDIRECTION' and as4local = 'A'
```
