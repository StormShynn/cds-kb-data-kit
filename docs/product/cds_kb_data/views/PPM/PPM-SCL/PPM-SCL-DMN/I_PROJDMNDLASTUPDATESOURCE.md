---
name: I_PROJDMNDLASTUPDATESOURCE
description: "Projdmndlastupdatesource"
app_component: PPM-SCL-DMN
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
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDLASTUPDATESOURCE

**Projdmndlastupdatesource**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
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
| `ProjectDemandLastUpdateSource` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as tv_proj_dmnd_upd_source )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_LastUpdateSourceTxt` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL
}

@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions:true
}

@Search.searchable: true

@ObjectModel: {
   sapObjectNodeType.name: 'ProjectDemandLastUpdateSource',
   semanticKey:       ['ProjectDemandLastUpdateSource'],
   representativeKey: 'ProjectDemandLastUpdateSource',
   dataCategory:       #VALUE_HELP,
   resultSet.sizeCategory: #XS,
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ],
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

@EndUserText.label: 'Update Source for Project Demands'

define root view entity I_ProjDmndLastUpdateSource
  as select from dd07l
  composition [0..*] of I_ProjDmndLastUpdtSourceTxt as _LastUpdateSourceTxt

{

      @ObjectModel.text.association: '_LastUpdateSourceTxt'
  key cast ( substring( domvalue_l, 1, 2 ) as tv_proj_dmnd_upd_source ) as ProjectDemandLastUpdateSource,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                  as DomainValue,
      _LastUpdateSourceTxt

}
where
      domname  = 'PROJ_DMND_UPD_SOURCE'
  and as4local = 'A'
```
