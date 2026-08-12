---
name: I_PRATAXTXLEASE
description: "PRA Tax Texas Lease"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXLEASE')/$value
semantic_en: "PRA Tax Texas Lease"
semantic_vi: "PRA Tax Texas Lease — CDS view giao diện dựa trên oiux3_tx_lease."
keywords:
  - "pra"
  - "tax"
  - "texas"
  - "lease"
  - "reporting"
  - "agency"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXTXLEASE

**PRA Tax Texas Lease**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXLEASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReportingAgencyLease` | ✓ | |  | `lease_number` | `CHAR(7)` | Texas Lease Number |
| `ReportingAgencyLeaseName` |  | |  | `lease_name` | `CHAR(50)` | Texas Lease Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXLEASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXLEASE')/$value)*

```abap
@EndUserText.label: 'PRA Tax Texas Lease'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTXLEASE'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ReportingAgencyLease'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRATexasTaxLease'

define view I_PRATaxTXLease
  as select from oiux3_tx_lease
{
      @ObjectModel.text.element:  [ 'ReportingAgencyLeaseName' ]
  key lease_number                                 as ReportingAgencyLease,
      @Semantics.text: true
      lease_name                                   as ReportingAgencyLeaseName
};
```
