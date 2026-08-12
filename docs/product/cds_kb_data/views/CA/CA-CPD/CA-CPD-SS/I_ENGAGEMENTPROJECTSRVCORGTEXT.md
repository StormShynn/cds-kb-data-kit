---
name: I_ENGAGEMENTPROJECTSRVCORGTEXT
description: "This CDS view provides the the descriptive name of a service organization."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSRVCORGTEXT')/$value
semantic_en: "This CDS view provides the the descriptive name of a service organization."
semantic_vi: "Service Org of Engmnt Project - Text — CDS view giao diện dựa trên Service Org of Engmnt Project - Text."
keywords:
  - "service"
  - "org"
  - "engmnt"
  - "project"
  - "text"
  - "engagement"
  - "language"
  - "engmt"
  - "name"
tags:
  - CA
  - bo:project
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - project
---
# I_ENGAGEMENTPROJECTSRVCORGTEXT

**This CDS view provides the the descriptive name of a service organization.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSRVCORGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectServiceOrg` | ✓ | |  | `org_unit_id` | `CHAR(5)` | Service Organization |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `EngmtProjectServiceOrgName` |  | |  | `org_unit_desc` | `CHAR(40)` | Description of Organization Unit ID |
| `_EngagementProjectServiceOrg` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProjectServiceOrg` | `I_EngagementProjectSrvcOrg` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSRVCORGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSRVCORGTEXT')/$value)*

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IEPSRVCORGTEXT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'EngagementProjectServiceOrg'
@EndUserText.label: 'Service Org of Engmnt Project - Text'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.buffering.numberOfKeyFields: 000
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@AccessControl.authorizationCheck: #CHECK
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {modelingPattern: #LANGUAGE_DEPENDENT_TEXT, 
               supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                       #CDS_MODELING_ASSOCIATION_TARGET,
                                       #CDS_MODELING_DATA_SOURCE,
                                       #SQL_DATA_SOURCE]
}
//@Search.searchable: true
define view I_EngagementProjectSrvcOrgText
  as select from /cpd/pwsc_orgidt
  association [0..1] to I_EngagementProjectSrvcOrg as _EngagementProjectServiceOrg on $projection.EngagementProjectServiceOrg = _EngagementProjectServiceOrg.EngagementProjectServiceOrg
  association [0..1] to I_Language                 as _Language                    on $projection.Language = _Language.Language
{

      //--[ GENERATED:012:GlBfhyJl7jY4oBIOE}WCZW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_EngmntProjSrvcOrgStdVH',
                     element: 'EngagementProjectServiceOrg' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_EngagementProjectServiceOrg'
  key org_unit_id   as EngagementProjectServiceOrg,
      @ObjectModel.foreignKey.association:'_Language'
      @Semantics.language: true
  key spras         as Language,
      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      @Search.fuzzinessThreshold: 0.8      
      org_unit_desc as EngmtProjectServiceOrgName,
      _EngagementProjectServiceOrg,
      _Language
}
```
