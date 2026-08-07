---
name: I_SLSDOCBOMEXPLSNSTRUCSCPTXT
description: Slsdocbomexplsnstrucscptxt
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
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
