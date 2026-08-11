---
name: I_PRATAXKANSASLEASE
description: "Tax Reporting Kansas Lease"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXKANSASLEASE')/$value
semantic_en: "Tax Reporting Kansas Lease"
semantic_vi: "Tax Reporting Kansas Lease — CDS view giao diện dựa trên Tax Reporting Kansas Lease."
keywords:
  - "tax"
  - "reporting"
  - "kansas"
  - "lease"
  - "agency"
  - "name"
  - "type"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXKANSASLEASE

**Tax Reporting Kansas Lease**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXKANSASLEASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReportingAgencyLease` | ✓ | |  | `lease_number` | `CHAR(7)` | Kansas Lease Number |
| `ReportingAgencyLeaseName` |  | |  | `lease_name` | `CHAR(50)` | Kansas Lease Name |
| `LeaseType` |  | |  | `lease_type` | `CHAR(1)` | Kansas Lease Type |
| `_LeaseType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LeaseType` | `I_PRATaxKansasLeaseType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXKANSASLEASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXKANSASLEASE')/$value)*

```abap
@EndUserText.label: 'Tax Reporting Kansas Lease'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXKSLEASE'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ReportingAgencyLease'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'PRAKansasTaxLease'

define view I_PRATaxKansasLease
  as select from /pra/ks_lease
  association [0..1] to I_PRATaxKansasLeaseType as _LeaseType on $projection.LeaseType = _LeaseType.LeaseType
{
      @ObjectModel.text.element:  [ 'ReportingAgencyLeaseName' ]
  key lease_number  as  ReportingAgencyLease,
      @Semantics.text: true
      lease_name    as  ReportingAgencyLeaseName,
      @ObjectModel.foreignKey.association: '_LeaseType'
      lease_type    as  LeaseType,
//      @Semantics.user.lastChangedBy: true
//      change_user   as  LastChangeUser,
//      @Semantics.businessDate.lastChangedAt: true
//      change_date   as  LastChangeDate,
//      @Semantics.time: true
//      change_time   as  LastChangeTime,
      _LeaseType

}
```
