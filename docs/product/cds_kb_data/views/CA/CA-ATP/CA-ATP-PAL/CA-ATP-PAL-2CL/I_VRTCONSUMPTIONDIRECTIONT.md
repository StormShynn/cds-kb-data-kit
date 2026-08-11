---
name: I_VRTCONSUMPTIONDIRECTIONT
description: "Vrtconsumptiondirectiont"
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
# I_VRTCONSUMPTIONDIRECTIONT

**Vrtconsumptiondirectiont**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VerticalConsumptionDirection` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as verticalconsumptiondirection preserving type )` | `CHAR(2)` | Vertical Consumption Direction |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `VerticalCnsmpnDirectionDesc` |  | |  | `cast( ddtext as verticalcnsmpndirectiondesc preserving type )` | `CHAR(60)` | Vertical Consumption Direction Description |
| `_Language` | | ✓ | | | | |
| `_VerticalConsumptionDirection` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_VerticalConsumptionDirection` | `I_VerticalConsumptionDirection` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Vertical  Consumption Direction - Text' //same as DDL description
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'VerticalConsumptionDirection'
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@AbapCatalog.sqlViewName: 'IPALVRTCSPMDIRT'
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
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_VrtConsumptionDirectionT //must start with "I_"; same as DDL source name in upper-camelcase notation 
   as select from dd07t
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   association [1..1] to I_VerticalConsumptionDirection as _VerticalConsumptionDirection 
      on $projection.VerticalConsumptionDirection = _VerticalConsumptionDirection.VerticalConsumptionDirection
{
     @ObjectModel.foreignKey.association: '_VerticalConsumptionDirection'
    key cast ( substring( domvalue_l, 1, 2 ) as verticalconsumptiondirection preserving type ) as VerticalConsumptionDirection,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as verticalcnsmpndirectiondesc preserving type ) as VerticalCnsmpnDirectionDesc, 
    _VerticalConsumptionDirection, //decomment only if no problems in analytics
    _Language 
}
where domname = 'VERTICALCONSUMPTIONDIRECTION' and as4local = 'A'
```
