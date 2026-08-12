---
name: I_RESOURCEREQUESTSKILLTAG
description: "This CDS view provides a list of skills required to fulfill a resource request. Skills are additional information provided along with the resource request, to enable the assignment or staffing of resources to a request."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTSKILLTAG')/$value
semantic_en: "This CDS view provides a list of skills required to fulfill a resource request. Skills are additional information provided along with the resource request, to enable the assignment or staffing of resources to a request."
semantic_vi: "Skill Tag of Resource Request — CDS view giao diện dựa trên Skill Tag of Resource Request."
keywords:
  - "skill"
  - "tag"
  - "resource"
  - "request"
  - "rsce"
  - "description"
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - bo:salesorder
---
# I_RESOURCEREQUESTSKILLTAG

**This CDS view provides a list of skills required to fulfill a resource request. Skills are additional information provided along with the resource request, to enable the assignment or staffing of resources to a request.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTSKILLTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ResourceRequestSkillTagUUID` | ✓ | |  | `skilltag_key` | `RAW(16)` | Skill Tag Key |
| `ResourceRequestUUID` |  | |  | `demand_key` | `RAW(16)` | Demand Key |
| `RsceReqSkillTagDescription` |  | |  | `skilltag_desc` |  |  |
| `_ResourceRequest` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ResourceRequest` | `I_ResourceRequest` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTSKILLTAG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTSKILLTAG')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSRCEREQSKLTAG'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'ResourceRequestSkillTagUUID'
@EndUserText.label: 'Skill Tag of Resource Request'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #SQL_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE

define view I_ResourceRequestSkillTag
  as select from /cpd/pln_skiltag

  association [0..1] to I_ResourceRequest as _ResourceRequest on $projection.ResourceRequestUUID = _ResourceRequest.ResourceRequestUUID
{

  key   skilltag_key            as ResourceRequestSkillTagUUID,
        demand_key              as ResourceRequestUUID,
        skilltag_desc           as RsceReqSkillTagDescription,
        _ResourceRequest
}

where
  skilltag_type = 'S'
```
