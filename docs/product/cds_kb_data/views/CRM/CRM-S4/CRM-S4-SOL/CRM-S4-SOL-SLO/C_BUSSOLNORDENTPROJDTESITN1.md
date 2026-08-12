---
name: C_BUSSOLNORDENTPROJDTESITN1
description: "Customer Project Date Changed Situation"
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDENTPROJDTESITN1')/$value
semantic_en: "Customer Project Date Changed Situation"
semantic_vi: "Customer Project Date Changed Situation — CDS view tiêu dùng dựa trên Customer Project Date Changed Situation."
keywords:
  - "customer"
  - "project"
  - "date"
  - "changed"
  - "situation"
  - "business"
  - "solution"
  - "order"
  - "item"
  - "soln"
  - "related"
  - "service"
  - "object"
  - "type"
  - "document"
tags:
  - CRM
  - bo:businesspartner
  - component:CRM-S4-SOL-SLO
  - consumption-view
  - CRM-S4
  - CRM-S4-SOL
  - CRM-S4-SOL-SLO
  - customer
  - project
---
# C_BUSSOLNORDENTPROJDTESITN1

**Customer Project Date Changed Situation**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDENTPROJDTESITN1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `BusinessSolutionOrderItem` | ✓ | |  | `cast(ltrim(SolutionOrderServiceItem.BusinessSolutionOrderItem, '0') as abap.numc( 6 ))` | `NUMC(6)` |  |
| `BusSolnOrdRelatedItem` | ✓ | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocumentItemCharUUID` |  | |  |  | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `SuccessorProject` |  | |  |  | `CHAR(24)` | Project ID |
| `ServiceDocSuccessorBusObjType` |  | |  |  | `CHAR(10)` |  |
| `BusSolnOrderItemCharUUID` |  | |  |  | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `BusSolnOrdReltdItmObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `ResponsibleEmployee` |  | |  | `cast(SolutionOrderServiceItem.ResponsibleEmployee as abap.numc( 8 ))` | `NUMC(8)` |  |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SalesOfficeOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Office |
| `SalesOrganizationOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Organization ID |
| `SalesGroupOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Group |
| `ServiceOrganization` |  | |  |  | `CHAR(14)` | Service Organization |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDENTPROJDTESITN1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDENTPROJDTESITN1')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'CSOLEPDTESIT1',
  compiler.compareFilter: true,
  preserveKey: true
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel:{
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL
  }
}
@ObjectModel.supportedCapabilities:[ #SITUATION_ANCHOR, #SITUATION_TRIGGER]
@ObjectModel.semanticKey: ['BusinessSolutionOrder', 'BusinessSolutionOrderItem']
@ObjectModel.uniqueIdField: 'ServiceDocumentItemCharUUID'

@VDM: {
  viewType: #CONSUMPTION,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Customer Project Date Changed Situation'

/*********************************************************************
          Customer Project Date Changed Situation
**********************************************************************/

/* Related sales/service/contract/project items depend on trigger service */
define view C_BusSolnOrdEntProjDteSitn1
  as select distinct from P_BusSolnOrderEntProjItmSitn as SolutionOrderServiceItem
     
{
      @Consumption.hidden: true
  key SolutionOrderServiceItem.BusinessSolutionOrder                                         as BusinessSolutionOrder,

      //trigger item
      @Consumption.hidden: true
  key cast(ltrim(SolutionOrderServiceItem.BusinessSolutionOrderItem, '0') as abap.numc( 6 )) as BusinessSolutionOrderItem,

      // Related item or anchor item
      @Consumption.hidden: true
  key SolutionOrderServiceItem.BusSolnOrdRelatedItem,


      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceObjectType,

      // Trigger key
      @Semantics.uuid: true
      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceDocumentItemCharUUID,

      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceDocumentItemObjectType,

      @Consumption.hidden: true
      SolutionOrderServiceItem.SuccessorProject                                              as SuccessorProject,

      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceDocSuccessorBusObjType,


      // Anchor key
      @Semantics.uuid: true
      @Consumption.hidden: true
      SolutionOrderServiceItem.BusSolnOrderItemCharUUID,

      @Consumption.hidden: true
      SolutionOrderServiceItem.BusSolnOrdReltdItmObjectType,

      @EndUserText.label: 'Responsible Employee'
      @UI.hidden: true
      cast(SolutionOrderServiceItem.ResponsibleEmployee as abap.numc( 8 ))                                            as ResponsibleEmployee,
      
      // Fields for defining conditions and message in template
      //  00 - Created/In Planning || 05 - Contract Prepration || 10 - Released/ In Execution || 40 - Completed || 42 - Closed
      @EndUserText.label: 'Project Stage'
      SolutionOrderServiceItem.ProcessingStatus,

      // @EndUserText.label: 'Project Manager'
      // ProjectManagerName,

      @EndUserText.label: 'Sales Organization'
      @UI.hidden: true
      SolutionOrderServiceItem.SalesOrganization,

      @EndUserText.label: 'Sales Office'
      @UI.hidden: true
      SolutionOrderServiceItem.SalesOffice,

      @EndUserText.label: 'Distribution Channel'
      @UI.hidden: true
      SolutionOrderServiceItem.DistributionChannel,

      @EndUserText.label: 'Division'
      @UI.hidden: true
      SolutionOrderServiceItem.Division,

      // Hidden fields
      @Consumption.hidden: true
      SolutionOrderServiceItem.SalesGroup,


      // Fields required for authorization
      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceDocumentType,

      @Consumption.hidden: true
      SolutionOrderServiceItem.SalesOfficeOrgUnitID,

      @Consumption.hidden: true
      SolutionOrderServiceItem.SalesOrganizationOrgUnitID,

      @Consumption.hidden: true
      SolutionOrderServiceItem.SalesGroupOrgUnitID,

      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceOrganization

}
where
      SolutionOrderServiceItem.BusSolnOrdItemIsTargetItem    <> 'X'                                                // Other items depend on the trigger service item
  and SolutionOrderServiceItem.BusSolnOrdReltdItmRefDateTime <> 0
  and SolutionOrderServiceItem.ProjectEndDate      <> 0
  and SolutionOrderServiceItem.BusSolnOrdReltdItmRefDateTime <  SolutionOrderServiceItem.ProjectEndDate  // Other items start/end before the trigger service ends. Since they depend on trigger service, they should start after the trigger service ends.

    


/* Trigger project item depends on related sales/contract/service/project items */
union all select distinct from P_BusSolnOrdEntProjItmGrp as SolutionOrderServiceItem

/* This association returns project items which are relevant for raising situations. It checks the latest delivery date against the start date of the project items */
//  inner join                   P_BusSolnOrdEntProjItmGrp    as SitnRelevantServiceItem on  SolutionOrderServiceItem.BusinessSolutionOrder     = SitnRelevantServiceItem.BusinessSolutionOrder
//                                                                                       and SolutionOrderServiceItem.BusinessSolutionOrderItem = SitnRelevantServiceItem.BusinessSolutionOrderItem

{
      @Consumption.hidden: true
  key SolutionOrderServiceItem.BusinessSolutionOrder                                         as BusinessSolutionOrder,

      //trigger item
      @Consumption.hidden: true
  key cast(ltrim(SolutionOrderServiceItem.BusinessSolutionOrderItem, '0') as abap.numc( 6 )) as BusinessSolutionOrderItem,

      @Consumption.hidden: true
  key SolutionOrderServiceItem.BusinessSolutionOrderItem                                     as BusSolnOrdRelatedItem,


      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceObjectType,

      // Trigger key
      @Semantics.uuid: true
      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceDocumentItemCharUUID,

      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceDocumentItemObjectType,

      @Consumption.hidden: true
      SolutionOrderServiceItem.SuccessorProject                                              as SuccessorProject,

      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceDocSuccessorBusObjType,


      // Anchor key
      @Semantics.uuid: true
      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceDocumentItemCharUUID                                   as BusSolnOrderItemCharUUID,

      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceDocumentItemObjectType                                 as BusSolnOrdReltdItmObjectType,

      @UI.hidden: true
      cast(SolutionOrderServiceItem.ResponsibleEmployee as abap.numc( 8 ))                   as ResponsibleEmployee,
      
      // Fields for defining conditions and message in template
      //  00 - Created/In Planning || 05 - Contract Prepration || 10 - Released/ In Execution || 40 - Completed || 42 - Closed
      @EndUserText.label: 'Project Stage'
      SolutionOrderServiceItem.ProcessingStatus,

      //  @EndUserText.label: 'Project Manager'
      //  SolutionOrderServiceItem.ProjectManagerName,


      @EndUserText.label: 'Sales Organization'
      @UI.hidden: true
      SolutionOrderServiceItem.SalesOrganization,

      @EndUserText.label: 'Sales Office'
      @UI.hidden: true
      SolutionOrderServiceItem.SalesOffice,

      @EndUserText.label: 'Distribution Channel'
      @UI.hidden: true
      SolutionOrderServiceItem.DistributionChannel,

      @EndUserText.label: 'Division'
      @UI.hidden: true
      SolutionOrderServiceItem.Division,


      // Hidden fields
      @Consumption.hidden: true
      SolutionOrderServiceItem.SalesGroup,


      // Fields required for authorization
      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceDocumentType,

      @Consumption.hidden: true
      SolutionOrderServiceItem.SalesOfficeOrgUnitID,

      @Consumption.hidden: true
      SolutionOrderServiceItem.SalesOrganizationOrgUnitID,

      @Consumption.hidden: true
      SolutionOrderServiceItem.SalesGroupOrgUnitID,

      @Consumption.hidden: true
      SolutionOrderServiceItem.ServiceOrganization
}
where
      SolutionOrderServiceItem.BusSolnOrdReltdItmRefDateTime <> 0
  and SolutionOrderServiceItem.ProjectStartDate   <> 0
  and SolutionOrderServiceItem.BusSolnOrdReltdItmRefDateTime >  SolutionOrderServiceItem.ProjectStartDate // The max start/end of related item is after the trigger service starts. Since trigger service item depends on the other item, it should start after the other item end.
```
