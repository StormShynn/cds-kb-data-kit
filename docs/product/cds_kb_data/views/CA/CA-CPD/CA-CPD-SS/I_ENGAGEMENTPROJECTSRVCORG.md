---
name: I_ENGAGEMENTPROJECTSRVCORG
description: "This CDS view provides information about a service organization."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSRVCORG')/$value
semantic_en: "This CDS view provides information about a service organization."
semantic_vi: "Service Org of Engagement Project — CDS view giao diện dựa trên Service Org of Engagement Project."
keywords:
  - "service"
  - "org"
  - "engagement"
  - "project"
  - "engmt"
  - "proj"
  - "sales"
  - "delivery"
  - "time"
  - "posting"
  - "restricted"
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
# I_ENGAGEMENTPROJECTSRVCORG

**This CDS view provides information about a service organization.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSRVCORG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectServiceOrg` | ✓ | |  | `/cpd/pwsc_orgid.org_unit_id` | `CHAR(5)` | Service Organization |
| `EngmtProjServiceOrgIsSales` |  | |  | `/cpd/pwsc_orgid.sales_org` | `CHAR(1)` | Sales Org |
| `EngmtProjServiceOrgIsDelivery` |  | |  | `/cpd/pwsc_orgid.delivery_org` | `CHAR(1)` | Delivery Organization |
| `TimePostingIsRestricted` |  | |  | `/cpd/pwsc_org_at.restrict_time_posting` | `CHAR(1)` | Restrict Unstaffed Posting |
| `RestrictedTimePosting` |  | |  | `/cpd/pwsc_org_at.restrict_time_posting` | `CHAR(1)` | Restrict Unstaffed Posting |
| `_Text` | | ✓ | | | | |
| `_EngagementProjectSrvcOrgDets` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CompanyCodeAuth` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EngagementProjectSrvcOrgText` | [0..*] |
| `_EngagementProjectSrvcOrgDets` | `I_EngagementProjectSrvcOrgDets` | [0..*] |
| `_CompanyCode` | `I_EngagementProjectSrvcOrgDets` | [0..1] |
| `_ControllingArea` | `I_EngagementProjectSrvcOrgDets` | [0..1] |
| `_CompanyCodeAuth` | `I_EngmntProjServiceOrgDetails` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSRVCORG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSRVCORG')/$value)*

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IEPSRVCORG'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'EngagementProjectServiceOrg'
@ObjectModel.sapObjectNodeType.name: 'EngagementProjectServiceOrg'
@EndUserText.label: 'Service Org of Engagement Project'
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.numberOfKeyFields: 000
@AbapCatalog.buffering.type: #FULL
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {modelingPattern: #ANALYTICAL_DIMENSION, 
               supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                       #CDS_MODELING_ASSOCIATION_TARGET,
                                       #CDS_MODELING_DATA_SOURCE,
                                       #SQL_DATA_SOURCE,
                                       #EXTRACTION_DATA_SOURCE]
}
define view I_EngagementProjectSrvcOrg
  as select from /cpd/pwsc_orgid
  left outer join /cpd/pwsc_org_at on /cpd/pwsc_orgid.org_unit_id = /cpd/pwsc_org_at.org_unit_id
  association [0..*] to I_EngagementProjectSrvcOrgText as _Text                         on  $projection.EngagementProjectServiceOrg = _Text.EngagementProjectServiceOrg
  association [0..*] to I_EngagementProjectSrvcOrgDets as _EngagementProjectSrvcOrgDets on  $projection.EngagementProjectServiceOrg = _EngagementProjectSrvcOrgDets.EngagementProjectServiceOrg
  association [0..1] to I_EngagementProjectSrvcOrgDets as _CompanyCode                  on  $projection.EngagementProjectServiceOrg    = _CompanyCode.EngagementProjectServiceOrg
                                                                                        and _CompanyCode.AssignedOrganisationIsDefault = 'X'
                                                                                        and _CompanyCode.AssignedOrganisationType      = 'CC'
  association [0..1] to I_EngagementProjectSrvcOrgDets as _ControllingArea              on  $projection.EngagementProjectServiceOrg        = _ControllingArea.EngagementProjectServiceOrg
                                                                                        and _ControllingArea.AssignedOrganisationIsDefault = 'X'
                                                                                        and _ControllingArea.AssignedOrganisationType      = 'CA'
  association [0..1] to I_EngmntProjServiceOrgDetails  as _CompanyCodeAuth              on  $projection.EngagementProjectServiceOrg = _CompanyCodeAuth.EngagementProjectServiceOrg                                                                        
                                                 
{
      @ObjectModel.text.association: '_Text'
  key /cpd/pwsc_orgid.org_unit_id                   as EngagementProjectServiceOrg,
      @Semantics.booleanIndicator:true
      /cpd/pwsc_orgid.sales_org                     as EngmtProjServiceOrgIsSales,
      @Semantics.booleanIndicator:true
      /cpd/pwsc_orgid.delivery_org                  as EngmtProjServiceOrgIsDelivery,
      
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'RestrictedTimePosting'
      /cpd/pwsc_org_at.restrict_time_posting        as TimePostingIsRestricted,
      
      /cpd/pwsc_org_at.restrict_time_posting        as RestrictedTimePosting,
      
      _Text,
      _EngagementProjectSrvcOrgDets,
      _CompanyCode,
      _ControllingArea,
       @Consumption.hidden: true
      _CompanyCodeAuth
}
```
