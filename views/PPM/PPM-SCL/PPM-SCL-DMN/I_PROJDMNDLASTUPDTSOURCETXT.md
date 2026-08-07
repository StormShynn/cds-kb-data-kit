---
name: I_PROJDMNDLASTUPDTSOURCETXT
description: "Projdmndlastupdtsourcetxt"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDLASTUPDTSOURCETXT

**Projdmndlastupdtsourcetxt**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ProjectDemandLastUpdateSource` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as tv_proj_dmnd_upd_source )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `ProjDmndLastUpdateSourceText` |  | |  | `cast ( ddtext as tv_proj_dmnd_upd_src_txt )` |  |  |
| `_Language` | | ✓ | | | | |
| `_UpdateSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL
}

@Metadata: {
  ignorePropagatedAnnotations: true
//  allowExtensions:true
}

@Search.searchable: true

@ObjectModel: {
   semanticKey:       ['ProjectDemandLastUpdateSource','Language'],
   representativeKey: 'ProjectDemandLastUpdateSource',
   dataCategory:       #TEXT,
   resultSet.sizeCategory: #XS,
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ],

   usageType: {
     serviceQuality:  #A,
     dataClass:       #META,
     sizeCategory:    #S
   }
}

@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type:  #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Update Source for Project Demands – Text'

define view entity I_ProjDmndLastUpdtSourceTxt
  as select from dd07t
  association        to parent I_ProjDmndLastUpdateSource as _UpdateSource on $projection.ProjectDemandLastUpdateSource = _UpdateSource.ProjectDemandLastUpdateSource
  association [0..1] to I_Language                        as _Language     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                 as Language,

      @ObjectModel.foreignKey.association: '_UpdateSource'
      @ObjectModel.text.element: ['ProjDmndLastUpdateSourceText']

  key cast ( substring( domvalue_l, 1, 2 ) as tv_proj_dmnd_upd_source ) as ProjectDemandLastUpdateSource,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking:#LOW
      @Semantics.text: true
      cast ( ddtext as tv_proj_dmnd_upd_src_txt )                       as ProjDmndLastUpdateSourceText,

      _UpdateSource,
      _Language

}
where
      domname  = 'PROJ_DMND_UPD_SOURCE'
  and as4local = 'A'
```
