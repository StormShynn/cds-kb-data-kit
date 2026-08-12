---
name: C_CMPLOBLASGTRECENTLYCHGDQ
description: "Recently Chgd Obl Assignments - Query"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTRECENTLYCHGDQ')/$value
semantic_en: "Recently Chgd Obl Assignments - Query"
semantic_vi: "Recently Chgd Obl Assignments - Query — CDS view tiêu dùng dựa trên Recently Chgd Obl Assignments - Query."
keywords:
  - "recently"
  - "chgd"
  - "obl"
  - "assignments"
  - "query"
  - "cmplnc"
  - "obligation"
  - "assignment"
  - "compliance"
  - "title"
  - "location"
  - "name"
  - "oblgn"
  - "assgmt"
  - "status"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
---
# C_CMPLOBLASGTRECENTLYCHGDQ

**Recently Chgd Obl Assignments - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTRECENTLYCHGDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceObligationTitle` |  | |  |  | `CHAR(255)` | Compliance Obligation Title |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `CmplncOblgnAssgmtCmplncStatus` |  | |  |  | `CHAR(2)` | Status |
| `CmplncOblgnAssgmtCmplncStsText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Is Deleted |
| `ComplianceOblgnAssgmtActnRqd` |  | |  |  | `CHAR(2)` | Action Required |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
| `LastChangedDate` |  | |  |  | `DATS(8)` | Last Changed Date |
| `LastChangeUTCDateTime` |  | |  |  | `DEC(21)` | Last Change Date Time |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTRECENTLYCHGDQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTRECENTLYCHGDQ')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Recently Chgd Obl Assignments - Query'
@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@OData.publish: true

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #MIXED
}

@Metadata.allowExtensions
@Metadata.ignorePropagatedAnnotations:true

define transient view entity C_CmplOblAsgtRecentlyChgdQ
  provider contract analytical_query
  as projection on I_CmplOblAsgtRecentlyChgdC
{
  CmplncObligationAssignmentUUID,
  ComplianceObligationTitle,
  EHSLocationUUID,
  EHSLocationName,
  CmplncOblgnAssgmtCmplncStatus,
  CmplncOblgnAssgmtCmplncStsText,
  IsDeleted,
  ComplianceOblgnAssgmtActnRqd,
  ComplianceObligationTypeCode,
  ComplianceObligationDomainCode,
  LastChangedDate,
  LastChangeUTCDateTime
}
```
