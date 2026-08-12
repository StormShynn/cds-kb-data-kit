---
name: I_RESOURCEASSIGNMENTPLANITEM
description: "This CDS view provides the prerequisites for answering the following business questions: Which resources are staffed to a resource request? In which months are resources staffed and for how many hours? What is the delivery organization of the resource?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEASSIGNMENTPLANITEM')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which resources are staffed to a resource request? In which months are resources staffed and for how many hours? What is the delivery organization of the resource?"
semantic_vi: "Plan Item of Resource Assignment — CDS view cơ bản dựa trên Plan Item of Resource Assignment."
keywords:
  - "plan"
  - "item"
  - "resource"
  - "assignment"
  - "line"
  - "request"
  - "fiscal"
  - "period"
  - "year"
  - "engagement"
  - "project"
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - delivery
  - interface-view
  - lob:cross_application components
  - bo:salesorder
  - plan
---
# I_RESOURCEASSIGNMENTPLANITEM

**This CDS view provides the prerequisites for answering the following business questions: Which resources are staffed to a resource request? In which months are resources staffed and for how many hours? What is the delivery organization of the resource?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEASSIGNMENTPLANITEM')/$value) |

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
| `UnitOfMeasure` |  | |  | `uom` | `UNIT(3)` | Unit of Measure |
| `PlndEffortQty` |  | |  | `effort` | `QUAN(15)` | Total Quantity |
| `EngmntProjPlanLineType` |  | |  | `line_type` | `CHAR(1)` | Line type |
| `EngmtProjFinPlanVersion` |  | |  | `version` | `CHAR(28)` | Plan Version ID |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEASSIGNMENTPLANITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEASSIGNMENTPLANITEM')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSRCEASGNPLNITM'
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
@EndUserText.label: 'Plan Item of Resource Assignment'
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

define view I_ResourceAssignmentPlanItem
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
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      uom                                            as UnitOfMeasure,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      @DefaultAggregation: #SUM
      effort                                         as PlndEffortQty,
      @Consumption.hidden: true
      line_type                                      as EngmntProjPlanLineType,
      @Consumption.hidden: true
      version                                        as EngmtProjFinPlanVersion,
      _WorkPackage,
      _EngagementProject,
      _WorkItem,
      _EngagementProjectResourceType,
      _EngagementProjectResource,
      _DeliveryOrganization,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_PersonWorkAgreement_1'
      _PersonWorkAgreement,
      _PersonWorkAgreement_1,
      _ResourceRequest,
      _UnitOfMeasure
}
where
      line_type = 'S'
  and version   = '1'
```
