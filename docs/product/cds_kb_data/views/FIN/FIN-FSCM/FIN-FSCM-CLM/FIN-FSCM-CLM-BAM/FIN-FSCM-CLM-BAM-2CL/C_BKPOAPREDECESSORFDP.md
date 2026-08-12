---
name: C_BKPOAPREDECESSORFDP
description: "This CDS view is used during the creation of a PDF for powers of attorney and provides information for the predecessor of a power of attorney. This CDS view provides the data to answer the following business questions: What is the ID and name of the predecessor power of attorney? What is the validity period of the predecessor power of attorney? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPREDECESSORFDP')/$value
semantic_en: "This CDS view is used during the creation of a PDF for powers of attorney and provides information for the predecessor of a power of attorney. This CDS view provides the data to answer the following business questions: What is the ID and name of the predecessor power of attorney? What is the validity period of the predecessor power of attorney? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Form Data Provider for POA Predecessor — CDS view tiêu dùng dựa trên I_BkPOAPredecessor."
keywords:
  - "form"
  - "data"
  - "provider"
  - "for"
  - "poa"
  - "predecessor"
  - "bank"
  - "power"
  - "attorney"
  - "authorization"
  - "group"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - bo:purchaseorder
---
# C_BKPOAPREDECESSORFDP

**This CDS view is used during the creation of a PDF for powers of attorney and provides information for the predecessor of a power of attorney. This CDS view provides the data to answer the following business questions: What is the ID and name of the predecessor power of attorney? What is the validity period of the predecessor power of attorney? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPREDECESSORFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BkPOAPredecessorUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney: Predecessor Row UUID |
| `BkPOAAuthorizationGroup` |  | | `_BankPowerOfAttorney` | `BkPOAAuthorizationGroup` | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `BankPowerOfAttorneyPredecessor` |  | |  |  | `CHAR(20)` | ID of Predecessor Power of Attorney |
| `PredecessorBankPOAUUID` |  | | `_Predecessor` | `BankPowerOfAttorneyUUID` | `RAW(16)` | Power of Attorney UUID |
| `BankPowerOfAttorneyName` |  | | `_Predecessor` | `BankPowerOfAttorneyName` | `CHAR(40)` | Power of Attorney Description |
| `ValidityEndDate` |  | | `_Predecessor` | `ValidityEndDate` | `DATS(8)` | Valid-To Date |
| `ValidityStartDate` |  | | `_Predecessor` | `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `_PredecessorAuthRep` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PredecessorAuthRep` | `C_BkPOAPrdcssrAuthzdRprstvFDP` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPREDECESSORFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPREDECESSORFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Form Data Provider for POA Predecessor'
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #CONSUMPTION }
@ObjectModel.usageType:{ serviceQuality: #C,
                         sizeCategory:   #S,
                         dataClass:      #MASTER }
@ObjectModel.modelingPattern:           #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_FORM_DATA_PROVIDER   ]
define view entity C_BkPOAPredecessorFDP
  as select from I_BkPOAPredecessor
  association [0..*] to C_BkPOAPrdcssrAuthzdRprstvFDP as _PredecessorAuthRep on  $projection.BankPowerOfAttorneyUUID = _PredecessorAuthRep.BankPowerOfAttorneyUUID
                                                                             and $projection.PredecessorBankPOAUUID  = _PredecessorAuthRep.PredecessorBankPOAUUID
{
  key BankPowerOfAttorneyUUID,
  key BkPOAPredecessorUUID,
      // for DCL
      _BankPowerOfAttorney.BkPOAAuthorizationGroup,
      BankPowerOfAttorneyPredecessor,
      _Predecessor.BankPowerOfAttorneyUUID as PredecessorBankPOAUUID,
      _Predecessor.BankPowerOfAttorneyName,
      _Predecessor.ValidityEndDate,
      _Predecessor.ValidityStartDate,
      _PredecessorAuthRep
}
where
      _BankPowerOfAttorney.BankPowerOfAttorneyIsBlocked <> 'X'
  and _Predecessor.BankPowerOfAttorneyIsBlocked         <> 'X'
```
