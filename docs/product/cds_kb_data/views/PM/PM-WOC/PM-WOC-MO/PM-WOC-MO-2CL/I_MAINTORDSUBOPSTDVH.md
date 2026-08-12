---
name: I_MAINTORDSUBOPSTDVH
description: "This CDS view provides value help for MaintenanceOrderSubOperation. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDSUBOPSTDVH')/$value
semantic_en: "This CDS view provides value help for MaintenanceOrderSubOperation. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Maintenance Order Suboperation — CDS view giao diện (transactional data) dựa trên I_MaintenanceOrderSubOperation."
keywords:
  - "maintenance"
  - "order"
  - "suboperation"
  - "operation"
  - "type"
  - "planning"
  - "plant"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - bo:project
---
# I_MAINTORDSUBOPSTDVH

**This CDS view provides value help for MaintenanceOrderSubOperation. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDSUBOPSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  | `CHAR(12)` | Order Number |
| `MaintenanceOrderOperation` | ✓ | |  |  | `CHAR(4)` | Activity Number |
| `MaintenanceOrderSubOperation` | ✓ | |  |  | `CHAR(4)` | Activity Number |
| `MaintenanceOrderType` |  | | `_MaintenanceOrder` | `MaintenanceOrderType` | `CHAR(4)` | Order Type |
| `MaintenancePlanningPlant` |  | | `_MaintenanceOrder` | `MaintenancePlanningPlant` | `CHAR(4)` | Maintenance Planning Plant |
| `MaintenancePlannerGroup` |  | | `_MaintenanceOrder` | `MaintenancePlannerGroup` | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintObjectLocAcctAssgmtNmbr` |  | | `_MaintenanceOrder` | `MaintObjectLocAcctAssgmtNmbr` | `CHAR(12)` | Location and account assignment for technical object |
| `FunctionalLocation` |  | | `_MaintenanceOrder._LocationAccountAssignment` | `FunctionalLocation` | `CHAR(30)` | Functional Location |
| `Equipment` |  | | `_MaintenanceOrder` | `Equipment` | `CHAR(18)` | Equipment Number |
| `OperationPersonResponsible` |  | |  |  | `NUMC(8)` | Personnel number |
| `_PersonResponsible` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDSUBOPSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDSUBOPSTDVH')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IMOSO__VH',
                compiler.compareFilter: true }
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK

@Search.searchable: true

@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'MaintenanceOrderSubOperation',
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  usageType: { 
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL } } 

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Maintenance Order Suboperation'
define view I_MaintOrdSubOpStdVH
  as select from I_MaintenanceOrderSubOperation
{
      @Search: {
        mode: #IDENTIFIER,
        defaultSearchElement: true }
  key MaintenanceOrder,
  @EndUserText: { label: 'Operation' }
  key MaintenanceOrderOperation,
  @EndUserText: { label: 'SubOperation' }
  key MaintenanceOrderSubOperation,

      @Consumption.hidden: true
      _MaintenanceOrder.MaintenanceOrderType,
      @Consumption.hidden: true
      _MaintenanceOrder.MaintenancePlanningPlant,
      @Consumption.hidden: true
      _MaintenanceOrder.MaintenancePlannerGroup,
      @Consumption.hidden: true
      _MaintenanceOrder.MaintObjectLocAcctAssgmtNmbr,
      @Consumption.hidden: true
      _MaintenanceOrder._LocationAccountAssignment.FunctionalLocation,
      @Consumption.hidden: true
      _MaintenanceOrder.Equipment,
      @Consumption.hidden: true
      OperationPersonResponsible,
      
      _PersonResponsible,
      _MaintenanceOrder._LocationAccountAssignment,
      _MaintenanceOrder._LocationAccountAssignment._FunctionalLocation,
      _MaintenanceOrder._Equipment
}
```
