---
name: I_BUSPARTMARITALSTATUS
description: Business PartnerMARITALSTATUS
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - business-partner
  - status
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTMARITALSTATUS

**Business PartnerMARITALSTATUS**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaritalStatus` | ✓ | |  | `marst` | `CHAR(1)` | Marital Status of Business Partner |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartMaritalStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPBMARITALST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType.sizeCategory: #M,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  representativeKey: 'MaritalStatus',
  sapObjectNodeType.name: 'BusinessPartnerMaritalStatus',
  modelingPattern: #NONE,
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'BUPA Marital Status'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
define view I_BusPartMaritalStatus as select from tb027
association [0..*] to I_BusPartMaritalStatusText as _Text on $projection.MaritalStatus = _Text.MaritalStatus


 {
 @ObjectModel.text.association: '_Text'
 key marst  as MaritalStatus,
//_MaritalStatus.MaritalStatusName, 
 _Text
}
```
