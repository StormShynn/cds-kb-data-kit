---
name: I_BR_ASSIGNVEHICLETYPETOUSAGE
description: "This CDS view displays the relation between vehicle type and usage type for the nota fiscal. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_ASSIGNVEHICLETYPETOUSAGE')/$value
semantic_en: "This CDS view displays the relation between vehicle type and usage type for the nota fiscal. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Brazil NF Vehicle Type And Usage — CDS view giao diện dựa trên j_1bvehictypeusg."
keywords:
  - "brazil"
  - "vehicle"
  - "type"
  - "and"
  - "usage"
  - "assignment"
  - "start"
  - "date"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_ASSIGNVEHICLETYPETOUSAGE

**This CDS view displays the relation between vehicle type and usage type for the nota fiscal. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_ASSIGNVEHICLETYPETOUSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NFVehicleType` | ✓ | |  | `tpveic` | `CHAR(2)` | Vehicle Type |
| `VehicleUsage` | ✓ | |  | `espveic` | `CHAR(1)` | Vehicle Usage |
| `BR_VehicleAssignmentStartDate` |  | |  | `datefrom` | `DATS(8)` | Date from which the type and usage are valid |
| `BR_VehicleAssignmentEndDate` |  | |  | `dateto` | `DATS(8)` | Date to which the type and usage are valid |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_ASSIGNVEHICLETYPETOUSAGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_ASSIGNVEHICLETYPETOUSAGE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBRASSGVEHTPUSGE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Brazil NF Vehicle Type And Usage'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
define view I_BR_AssignVehicleTypeToUsage as select from j_1bvehictypeusg {
  key tpveic as NFVehicleType,
  key espveic as VehicleUsage,
  datefrom as BR_VehicleAssignmentStartDate,
  dateto as BR_VehicleAssignmentEndDate
}
```
