---
name: I_PHYSICALINVTRYISACTVBLKDT
description: Physicalinvtryisactvblkdt
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSICALINVTRYISACTVBLKDT

**Physicalinvtryisactvblkdt**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |
| `PhysicalInventoryActvBlkdStat` | ✓ | |  | `cast ( substring( domvalue_l, 1, 3 ) as pi_actblkdflag preserving type )` |
| `PhysInventoryActvBlkdStatTxt` |  | |  | `cast ( substring ( ddtext, 1, 60 ) as val_text preserving type )` |
| `_PhysicalInvtryIsActvBlkd` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PhysicalInvtryIsActvBlkd` | `I_PhysicalInvtryIsActvBlkd` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Physical Invtry stock indicator - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
               usageType:{
                           serviceQuality: #B,
                           sizeCategory: #S,
                           dataClass: #CUSTOMIZING
                         },
               dataCategory: #TEXT,
               modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
               representativeKey: 'PhysicalInventoryActvBlkdStat',
               resultSet.sizeCategory: #XS,
               supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SEARCHABLE_ENTITY,
                                        #EXTRACTION_DATA_SOURCE],
               sapObjectNodeType.name: 'PhysInventoryStockStatusText'
             }
@Analytics:{
             internalName: #LOCAL,
             dataExtraction.enabled: true
           }
@Search.searchable: true
@VDM: {
        lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC
      }
@Consumption.ranked: true
 /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */

define view entity I_PhysicalInvtryIsActvBlkdT
  as select from dd07t

  association [0..1] to I_PhysicalInvtryIsActvBlkd as _PhysicalInvtryIsActvBlkd on $projection.PhysicalInventoryActvBlkdStat = _PhysicalInvtryIsActvBlkd.PhysicalInventoryActvBlkdStat
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @Semantics.language: true
  key cast( ddlanguage as spras preserving type )                              as Language,
      @ObjectModel.foreignKey.association: '_PhysicalInvtryIsActvBlkd'
  key cast ( substring( domvalue_l, 1, 3 ) as pi_actblkdflag preserving type ) as PhysicalInventoryActvBlkdStat,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      cast ( substring ( ddtext, 1, 60 ) as val_text preserving type )         as PhysInventoryActvBlkdStatTxt,

      _Language,
      _PhysicalInvtryIsActvBlkd
}
where domname  = 'PI_ACTBLKDFLAG'
  and as4local = 'A' 
  and as4vers =  '0000'
```
