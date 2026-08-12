---
name: I_SERIALNOEXPLICITNESSLEVEL
description: "Serialnoexplicitnesslevel"
app_component: LO-MD-SN-2CL
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
  - LO
  - LO-MD
  - LO-MD-SN
  - interface-view
  - component:LO-MD-SN-2CL
  - lob:Logistics General
---
# I_SERIALNOEXPLICITNESSLEVEL

**Serialnoexplicitnesslevel**

| Property | Value |
|---|---|
| App Component | `LO-MD-SN-2CL` |
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
| `SerialNoExplicitnessLevel` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as serialnoexplicitnesslevel preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SerialNoExplicitnessLevelTxt` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Level of Explicitness for Serial Number'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
              internalName: #LOCAL
            }
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { 
                dataCategory: #VALUE_HELP,
                modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'SerialNoExplicitnessLevel',
                resultSet.sizeCategory: #XS,
                sapObjectNodeType.name: 'SerialNumberExplicitnessLevel', 
                supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER],
                usageType: { dataClass: #META, 
                             serviceQuality: #A, 
                             sizeCategory: #S }
              }
@Search.searchable: true
@VDM: {
        lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC 
      }

 /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */        
define view entity I_SerialNoExplicitnessLevel 
  as select from dd07l 
  association [0..*] to I_SerialNoExplicitnessLevelTxt as _Text on $projection.SerialNoExplicitnessLevel = _Text.SerialNoExplicitnessLevel

{
  @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as serialnoexplicitnesslevel preserving type ) as SerialNoExplicitnessLevel,

     @Analytics.hidden: true
     @Consumption.hidden: true
     @Search.defaultSearchElement: true
     @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
     _Text
    
}
where domname  = 'SERLV'
  and as4local = 'A'
  and as4vers  = '0000';
```
