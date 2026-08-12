---
name: I_SLSDOCBOMEXPLSNSTRUCSCPTXT
description: "Slsdocbomexplsnstrucscptxt"
app_component: SD-MD-MM-2CL
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
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - bom
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
---
# I_SLSDOCBOMEXPLSNSTRUCSCPTXT

**Slsdocbomexplsnstrucscptxt**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
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
| `SlsDocBOMExplsnStrucScp` | ✓ | |  | `cast(dd07t.domvalue_l as strum )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `SlsDocBOMExplsnStrucScpDesc` |  | |  | `ddtext` |  |  |
| `_SlsDocBOMExplsnStrucScp` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SlsDocBOMExplsnStrucScp` | `I_SlsDocBOMExplsnStrucScp` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Structure Scope of BOM Explosion - Text'
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
}
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: false
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SEARCHABLE_ENTITY,
                                        #LANGUAGE_DEPENDENT_TEXT  ]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SlsDocBOMExplsnStrucScp'
@Search.searchable: true
define view entity I_SlsDocBOMExplsnStrucScpTxt
  as select from dd07t
  association [0..1] to I_SlsDocBOMExplsnStrucScp as _SlsDocBOMExplsnStrucScp on $projection.SlsDocBOMExplsnStrucScp = _SlsDocBOMExplsnStrucScp.SlsDocBOMExplsnStrucScp
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SlsDocBOMExplsnStrucScp'
      @ObjectModel.text.element: [ 'SlsDocBOMExplsnStrucScpDesc' ]
  key cast(dd07t.domvalue_l as strum ) as SlsDocBOMExplsnStrucScp,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                       as Language,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                 as DomainValue,

      //Description
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      dd07t.ddtext                     as SlsDocBOMExplsnStrucScpDesc,

      //Associations
      _SlsDocBOMExplsnStrucScp,
      _Language
}
where
  (
    dd07t.domname  = 'STRUM'
  )
  and(
    dd07t.as4local = 'A'
  )
  and(
    dd07t.as4vers  = '0000'
  );
```
