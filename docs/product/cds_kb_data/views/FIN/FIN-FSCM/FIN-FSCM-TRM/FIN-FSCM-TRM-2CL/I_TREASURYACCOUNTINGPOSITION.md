---
name: I_TREASURYACCOUNTINGPOSITION
description: "This CDS view provides the existing treasury accounting positions which carry accounting information such as the account assignment reference, the functional area, and the cost center for treasury positions. This CDS view provides the data to answer the following business questions: Which account assignment reference is assigned to a treasury position? Which functional area is assigned to a treasury position? Which cost center is assigned to a treasury position? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYACCOUNTINGPOSITION')/$value
semantic_en: "This CDS view provides the existing treasury accounting positions which carry accounting information such as the account assignment reference, the functional area, and the cost center for treasury positions. This CDS view provides the data to answer the following business questions: Which account assignment reference is assigned to a treasury position? Which functional area is assigned to a treasury position? Which cost center is assigned to a treasury position? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Treasury Accounting Position — CDS view giao diện dựa trên tract_poscontext."
keywords:
  - "treasury"
  - "accounting"
  - "position"
  - "trsy"
  - "identification"
  - "account"
  - "assignment"
  - "functional"
  - "area"
  - "cost"
  - "center"
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - bo:purchaseorder
---
# I_TREASURYACCOUNTINGPOSITION

**This CDS view provides the existing treasury accounting positions which carry accounting information such as the account assignment reference, the functional area, and the cost center for treasury positions. This CDS view provides the data to answer the following business questions: Which account assignment reference is assigned to a treasury position? Which functional area is assigned to a treasury position? Which cost center is assigned to a treasury position? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYACCOUNTINGPOSITION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryPosition` | ✓ | |  | `os_guid` | `CHAR(32)` | Object Identity in Database Format |
| `TrsyPositionIdentificationUUID` |  | |  | `pos_identif_oid` | `CHAR(32)` | Object Identity in Database Format |
| `TreasuryGLAccountAssignmentRef` |  | |  | `aa_ref` | `CHAR(12)` | Account Assignment Reference of Position Management |
| `FunctionalArea` |  | |  | `fkber` | `CHAR(16)` | Functional Area |
| `CostCenter` |  | |  | `kostl` | `CHAR(10)` | Cost Center |
| `_PositionIdentifier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PositionIdentifier` | `I_TreasuryPositionIdentifier` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYACCOUNTINGPOSITION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYACCOUNTINGPOSITION')/$value)*

```abap
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.representativeKey: 'TreasuryPosition'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'TreasuryAccountingPosition'
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.automatic: true } 
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Treasury Accounting Position'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

define view entity I_TreasuryAccountingPosition as select from tract_poscontext as poscontext

  association [1..1] to I_TreasuryPositionIdentifier as _PositionIdentifier on  $projection.TreasuryPosition = _PositionIdentifier.TrsyPositionIdentificationUUID
{
 
 key poscontext.os_guid           as TreasuryPosition,
     poscontext.pos_identif_oid   as TrsyPositionIdentificationUUID, 
     poscontext.aa_ref            as TreasuryGLAccountAssignmentRef,
     poscontext.fkber             as FunctionalArea, 
     poscontext.kostl             as CostCenter,  
     _PositionIdentifier
}
```
