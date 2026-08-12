---
name: I_PROJECTDEMANDSTATUSTEXT
description: "Projectdemandstatustext"
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
  - text-view
  - project
  - text
  - status
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDSTATUSTEXT

**Projectdemandstatustext**

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
| `ProjectDemandStatus` | ✓ | |  | `status` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `ProjectDemandStatusText` |  | |  | `description` |  |  |
| `_Language` | | ✓ | | | | |
| `_Status` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Project Demand Status - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type:  #PUBLIC_LOCAL_API
}

@AbapCatalog: {
    compiler.compareFilter: true,
    dataMaintenance: #RESTRICTED,
    sqlViewName: 'IPRJDMNDSTATTXT'
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled: true

@ObjectModel: {
   sapObjectNodeType.name: 'ProjectDemandStatusText',
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   semanticKey:       [ 'ProjectDemandStatusText' ],
   representativeKey: 'ProjectDemandStatus',
   dataCategory: #TEXT,
   usageType: {
     serviceQuality:  #A,
     dataClass:       #CUSTOMIZING,
     sizeCategory:    #M
   },
   resultSet.sizeCategory: #XS
}

@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_ProjectDemandStatusText
  as select from dmnd_proj_stat_t
  association to parent I_ProjectDemandStatus as _Status   on $projection.ProjectDemandStatus = _Status.ProjectDemandStatus
  association [0..1] to I_Language            as _Language on $projection.Language = _Language.Language
{
         @ObjectModel.foreignKey.association: '_Status'
  key    status      as ProjectDemandStatus,

         @Semantics.language
         @ObjectModel.foreignKey.association: '_Language'
  key    langu       as Language,
         @Search: {
           defaultSearchElement: true,
           ranking: #HIGH
         }
         @Semantics.text
         description as ProjectDemandStatusText,

         _Status,
         _Language
};
```
