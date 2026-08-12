---
name: I_PHYSICALINVTRYISACTVBLKDT
description: "Physicalinvtryisactvblkdt"
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `PhysicalInventoryActvBlkdStat` | ✓ | |  | `cast ( substring( domvalue_l, 1, 3 ) as pi_actblkdflag preserving type )` |  |  |
| `PhysInventoryActvBlkdStatTxt` |  | |  | `cast ( substring ( ddtext, 1, 60 ) as val_text preserving type )` |  |  |
| `_PhysicalInvtryIsActvBlkd` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

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
