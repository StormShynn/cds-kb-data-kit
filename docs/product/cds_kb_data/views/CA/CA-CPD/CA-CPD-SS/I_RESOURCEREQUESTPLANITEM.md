---
name: I_RESOURCEREQUESTPLANITEM
description: "This CDS view provides the prerequisites for answering the following business questions: What kind of resource requests are planned in a customer or internal project? What are the different roles requested to execute a customer or internal project? What are the skills required for each resource request? How many hours have been requested for a role, and in which months? What is the planned cost of a request? What is the planned cost of a request? What is the expected revenue for a resource request?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTPLANITEM')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What kind of resource requests are planned in a customer or internal project? What are the different roles requested to execute a customer or internal project? What are the skills required for each resource request? How many hours have been requested for a role, and in which months? What is the planned cost of a request? What is the planned cost of a request? What is the expected revenue for a resource request?"
semantic_vi: "Plan Item for Resource Request — CDS view cơ bản dựa trên Plan Item for Resource Request."
keywords:
  - "plan"
  - "item"
  - "for"
  - "resource"
  - "request"
  - "line"
  - "fiscal"
  - "period"
  - "year"
  - "engagement"
  - "project"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - plan
  - project
  - bo:salesorder
---
# I_RESOURCEREQUESTPLANITEM

**This CDS view provides the prerequisites for answering the following business questions: What kind of resource requests are planned in a customer or internal project? What are the different roles requested to execute a customer or internal project? What are the skills required for each resource request? How many hours have been requested for a role, and in which months? What is the planned cost of a request? What is the planned cost of a request? What is the expected revenue for a resource request?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTPLANITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanLineItemUUID` | ✓ | |  | `plan_line_guid` | `RAW(16)` | Planning Line GUID |
| `ResourceRequestUUID` |  | |  | `demand_key` | `RAW(16)` | Demand Key |
| `FiscalPeriod` |  | |  | `period` | `NUMC(3)` | Period |
| `FiscalYear` |  | |  | `fc_year` | `NUMC(4)` | Fiscal Year |
| `EngagementProject` |  | |  | `cast(mp_id as /cpd/eng_mp_id preserving type)` | `CHAR(40)` | Engagement Project ID |
| `WorkPackage` |  | |  | `wp_id` | `CHAR(50)` | Plan Item |
| `EngagementProjectResourceType` |  | |  | `res_type` | `CHAR(4)` | Resource Type ID |
| `EngagementProjectResource` |  | |  | `resource_id` | `CHAR(40)` | Resource ID |
| `EmploymentInternalID` |  | |  | `employee` | `NUMC(8)` | Object ID |
| `WorkItem` |  | |  | `workitem_id` | `CHAR(10)` | Work Item ID |
| `BillingControlCategory` |  | |  | `billgctrlcat` | `CHAR(8)` | Billing Control Category |
| `DeliveryOrganization` |  | |  | `delvry_serv_org` | `CHAR(5)` | Service Organization |
| `Currency` |  | |  | `currency` | `CUKY(5)` | Plan Currency |
| `PlndCostAmt` |  | |  | `cost` | `CURR(17)` | Amount |
| `UnitOfMeasure` |  | |  | `uom` | `UNIT(3)` | Unit of Measure |
| `PlndEffortQty` |  | |  | `effort` | `QUAN(15)` | Total Quantity |
| `PlndRevnAmt` |  | |  | `revenue` | `CURR(17)` | Amount |
| `_ResourceRequest` | | ✓ | | | | |
| `_EngagementProject` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_WorkItem` | | ✓ | | | | |
| `_EngagementProjectResourceType` | | ✓ | | | | |
| `_EngagementProjectResource` | | ✓ | | | | |
| `_DeliveryOrganization` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ResourceRequest` | `I_ResourceRequest` | [0..1] |
| `_EngagementProject` | `I_EngagementProject` | [0..1] |
| `_WorkPackage` | `I_WorkPackage` | [0..1] |
| `_WorkItem` | `I_WorkPackageWorkItem` | [0..1] |
| `_EngagementProjectResourceType` | `I_EngmntProjResourceType` | [0..1] |
| `_EngagementProjectResource` | `I_EngagementProjectResource` | [0..1] |
| `_DeliveryOrganization` | `I_EngagementProjectSrvcOrg` | [0..1] |
| `_PersonWorkAgreement` | `I_PersonWorkAgreement` | [0..*] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTPLANITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTPLANITEM')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSRCEREQPLNITM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData: {
    blockingIndicator: [ '_PersonWorkAgreement_1._BusinessPartner.IsBusinessPurposeCompleted'],
    blocking: #REQUIRED
    }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #TRANSACTIONAL,
  sapObjectNodeType.name: 'CommercialProject'
  }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Plan Item for Resource Request'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@Analytics.dataExtraction: {
enabled: true,
delta.changeDataCapture: {
mapping:[
{
table: '/cpd/plandata', role: #MAIN,
viewElement: ['PlanLineItemUUID'],
tableElement: ['plan_line_guid']
}
]
}}

define view I_ResourceRequestPlanItem
  as select from /cpd/plandata

  association [0..1] to I_ResourceRequest           as _ResourceRequest               on  $projection.ResourceRequestUUID = _ResourceRequest.ResourceRequestUUID

  association [0..1] to I_EngagementProject         as _EngagementProject             on  $projection.EngagementProject = _EngagementProject.EngagementProject

  association [0..1] to I_WorkPackage               as _WorkPackage                   on  $projection.WorkPackage = _WorkPackage.WorkPackage

  association [0..1] to I_WorkPackageWorkItem       as _WorkItem                      on  $projection.WorkItem    = _WorkItem.WorkItem
                                                                                      and $projection.WorkPackage = _WorkItem.WorkPackage

  association [0..1] to I_EngmntProjResourceType    as _EngagementProjectResourceType on  $projection.EngagementProjectResourceType = _EngagementProjectResourceType.EngagementProjectResourceType

  association [0..1] to I_EngagementProjectResource as _EngagementProjectResource     on  $projection.EngagementProjectResourceType = _EngagementProjectResource.EngagementProjectResourceType
                                                                                      and $projection.EngagementProjectResource     = _EngagementProjectResource.EngagementProjectResource

  association [0..1] to I_EngagementProjectSrvcOrg  as _DeliveryOrganization          on  $projection.DeliveryOrganization = _DeliveryOrganization.EngagementProjectServiceOrg

  association [0..*] to I_PersonWorkAgreement       as _PersonWorkAgreement           on  $projection.EmploymentInternalID = _PersonWorkAgreement.PersonWorkAgreement
  
  association [0..1] to I_PersonWorkAgreement_1     as _PersonWorkAgreement_1         on  $projection.EmploymentInternalID = _PersonWorkAgreement_1.PersonWorkAgreement

  association [0..1] to I_UnitOfMeasure             as _UnitOfMeasure                 on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_Currency                  as _Currency                      on  $projection.Currency = _Currency.Currency


{
  key plan_line_guid                                 as PlanLineItemUUID,
      demand_key                                     as ResourceRequestUUID,
      period                                         as FiscalPeriod,
      fc_year                                        as FiscalYear,
      @ObjectModel.foreignKey.association: '_EngagementProject'
      cast(mp_id  as /cpd/eng_mp_id preserving type) as EngagementProject,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      wp_id                                          as WorkPackage,
      @ObjectModel.foreignKey.association: '_EngagementProjectResourceType'
      res_type                                       as EngagementProjectResourceType,
      @ObjectModel.foreignKey.association: '_EngagementProjectResource'
      resource_id                                    as EngagementProjectResource,
      employee                                       as EmploymentInternalID,
      @ObjectModel.foreignKey.association: '_WorkItem'
      workitem_id                                    as WorkItem,
      billgctrlcat                                   as BillingControlCategory,
      @ObjectModel.foreignKey.association: '_DeliveryOrganization'
      delvry_serv_org                                as DeliveryOrganization,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_Currency'
      currency                                       as Currency,
      @Semantics.amount.currencyCode: 'Currency'
      @DefaultAggregation: #SUM
      cost                                           as PlndCostAmt,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      uom                                            as UnitOfMeasure,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      @DefaultAggregation: #SUM
      effort                                         as PlndEffortQty,
      @Semantics.amount.currencyCode: 'Currency'
      @DefaultAggregation: #SUM
      revenue                                        as PlndRevnAmt,

      _WorkPackage,
      _EngagementProject,
      _WorkItem,
      _EngagementProjectResourceType,
      _EngagementProjectResource,
      _DeliveryOrganization,
      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: '_PersonWorkAgreement_1'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_PersonWorkAgreement_1'
      _PersonWorkAgreement,
      _PersonWorkAgreement_1,
      _ResourceRequest,
      _UnitOfMeasure,
      _Currency
}

where
      line_type = 'D'
  and version   = '1'
  and is_unit_based != 'X'
```
