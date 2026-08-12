---
name: C_BKPOAACTIVITYASSIGNMENTFDP
description: "This CDS view is used during the creation of a PDF for powers of attorney and provides the ID and the description of the activities assigned to a power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAACTIVITYASSIGNMENTFDP')/$value
semantic_en: "This CDS view is used during the creation of a PDF for powers of attorney and provides the ID and the description of the activities assigned to a power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Form Data Provider for POA Activity — CDS view tiêu dùng dựa trên I_BkPOAActivityAssignment."
keywords:
  - "form"
  - "data"
  - "provider"
  - "for"
  - "poa"
  - "activity"
  - "bank"
  - "power"
  - "attorney"
  - "assignment"
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
# C_BKPOAACTIVITYASSIGNMENTFDP

**This CDS view is used during the creation of a PDF for powers of attorney and provides the ID and the description of the activities assigned to a power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAACTIVITYASSIGNMENTFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BkPOAActivityAssignmentUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney: Activity UUID |
| `BkPOAAuthorizationGroup` |  | | `_BankPowerOfAttorney` | `BkPOAAuthorizationGroup` | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `BankPowerOfAttorneyActivity` |  | |  |  | `CHAR(4)` | Power of Attorney: Activity ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAACTIVITYASSIGNMENTFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAACTIVITYASSIGNMENTFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Form Data Provider for POA Activity'
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #CONSUMPTION }
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #MASTER
}
@ObjectModel.modelingPattern:           #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_FORM_DATA_PROVIDER   ]
define view entity C_BkPOAActivityAssignmentFDP
  as select from I_BkPOAActivityAssignment
{
  key BankPowerOfAttorneyUUID,
  key BkPOAActivityAssignmentUUID,
      // for DCL
      _BankPowerOfAttorney.BkPOAAuthorizationGroup,
      BankPowerOfAttorneyActivity,
      _Activity._Text[1:Language = $session.system_language].BkPowerOfAttorneyActivityName

}
where
  _BankPowerOfAttorney.BankPowerOfAttorneyIsBlocked <> 'X'
```
