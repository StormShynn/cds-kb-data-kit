---
name: C_BUSSOLNORDENTPROJECTITMSITN
description: "Soln Ord Customer Project Item Situation Anchor and Trigger"
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDENTPROJECTITMSITN')/$value
semantic_en: "Soln Ord Customer Project Item Situation Anchor and Trigger"
semantic_vi: "Soln Ord Customer Project Item Situation Anchor and Trigger — CDS view tiêu dùng dựa trên I_BusSolnOrderItemSituation."
keywords:
  - "soln"
  - "ord"
  - "customer"
  - "project"
  - "item"
  - "situation"
  - "anchor"
  - "and"
  - "trigger"
  - "business"
  - "solution"
  - "order"
  - "char"
  - "service"
  - "object"
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
# C_BUSSOLNORDENTPROJECTITMSITN

**Soln Ord Customer Project Item Situation Anchor and Trigger**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDENTPROJECTITMSITN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  | `ltrim( BusinessSolutionOrder, '0' )` | `CHAR(10)` |  |
| `BusinessSolutionOrderItem` | ✓ | |  | `cast(ltrim(BusinessSolutionOrderItem, '0') as abap.numc( 6 ))` | `NUMC(6)` |  |
| `BusSolnOrderItemCharUUID` |  | |  |  | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ResponsibleEmployeeUserID` |  | |  |  | `CHAR(12)` | User ID |
| `SuccessorProject` |  | |  |  | `CHAR(24)` | Project ID |
| `ServiceEmployee` |  | |  |  | `CHAR(10)` | Executing Service Employee |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project (internal) |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SalesOfficeOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Office |
| `SalesOrganizationOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Organization ID |
| `SalesGroupOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Group |
| `ServiceOrganization` |  | |  |  | `CHAR(14)` | Service Organization |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDENTPROJECTITMSITN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDENTPROJECTITMSITN')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CSOLEPITMSITU'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl:
       {
         authorizationCheck: #CHECK,
         personalData.blocking: #('TRANSACTIONAL_DATA')
       }

@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM: {
  viewType: #CONSUMPTION,
  lifecycle.status: #DEPRECATED,
  lifecycle.successor: 'C_BusSolnOrdEntProjItmSitn_2'
}

@ObjectModel:{
// representativeKey: ['BusinessSolutionOrder', 'BusinessSolutionOrderItem'] ,
       usageType:
       {
          dataClass: #TRANSACTIONAL,
          serviceQuality: #C,
          sizeCategory: #XXL
       }
}

/* Semantic key used for navigation */
@ObjectModel.semanticKey: ['BusinessSolutionOrder', 'BusinessSolutionOrderItem']

/* Unique key for situation */
@ObjectModel.uniqueIdField: 'BusSolnOrderItemCharUUID'

@ObjectModel.supportedCapabilities:[ #SITUATION_ANCHOR, #SITUATION_TRIGGER]
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Soln Ord Customer Project Item Situation Anchor and Trigger'

/* Situation: Planned start date of the Solution Order customer project changed
   Template:  SOLN_SOLO_PROJITM_DATE_CHGD                                       */
   
   /* !!!DONOT USE THIS VIEW. SOON IT IS GOING TO BE DEPRECATED!!! 
    Please use C_BusSolnOrdEntProjItmSitn_2 instead */
   

define view C_BusSolnOrdEntProjectItmSitn
  as select from I_BusSolnOrderItemSituation 

{
      // Key fields
      @Consumption.hidden:true
  key ltrim( BusinessSolutionOrder, '0'    )     as BusinessSolutionOrder,

      @Consumption.hidden:true
  key cast(ltrim(BusinessSolutionOrderItem, '0') as abap.numc( 6 )) as BusinessSolutionOrderItem,

      // Unique Key for situation
      @UI.hidden:true
      @Semantics.uuid: true
      BusSolnOrderItemCharUUID,

      @Consumption.hidden: true
      ServiceObjectType,

      @Consumption.hidden: true
      ServiceDocumentType,

      // Employee responsible for notification/action
      @Consumption.hidden: true
      @EndUserText.label: 'Responsible Employee'
      ResponsibleEmployeeUserID,

      // Required for situation message
      @Consumption.hidden: true
      @EndUserText.label: 'Follow-up Document'
      SuccessorProject, 

      @Consumption.hidden: true
      @EndUserText.label: 'Service Technician'
      ServiceEmployee,
      
      /* Situation: Project Start date of customer project changed
         Template:   SOLN_SOLO_PROJITM_DATE_CHGD */
      @Consumption.hidden: true   
      @EndUserText.label: 'Project definition'
      ProjectInternalID,      

     /* Project stuatus 
      00: Created/In Planning 05: Contract Prepration 10: Released/In Execution 40: Completed  42: Closed */
       @EndUserText.label: 'Project Stage'
       ProcessingStatus,
      
      // Sales Area and Related fields for authorization
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @UI.hidden:true
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @UI.hidden:true
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      @UI.hidden:true
      SalesOfficeOrgUnitID,
      @UI.hidden:true
      SalesOrganizationOrgUnitID,
      @UI.hidden:true
      SalesGroupOrgUnitID,
      @UI.hidden:true
      ServiceOrganization,


      //Associations
      @UI.hidden:true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      _SalesOfficeOrgUnit_2,
      @UI.hidden:true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      _SalesOrganizationOrgUnit_2,
      @UI.hidden:true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'
      _SalesGroupOrgUnit,
      _SalesGroupOrgUnit_2,
      @UI.hidden:true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ServiceOrganizationOrgUnit_2'
      _ServiceOrganizationOrgUnit,
      _ServiceOrganizationOrgUnit_2,
      @UI.hidden:true
      _SalesOrganization,
      @UI.hidden:true
      _SalesOffice,
      @UI.hidden:true
      _SalesGroup,
      @UI.hidden:true
      _DistributionChannel,
      @UI.hidden:true
      _Division,
      @UI.hidden:true
      _ServiceEmployee
}
where
      ServiceDocumentItemObjectType = 'BUS2000193'
```
