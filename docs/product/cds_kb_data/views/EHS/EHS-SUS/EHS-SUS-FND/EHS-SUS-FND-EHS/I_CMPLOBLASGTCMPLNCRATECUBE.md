---
name: I_CMPLOBLASGTCMPLNCRATECUBE
description: "Cmplnc Oblgn Assign Cmplnc Rate - Cube"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTCMPLNCRATECUBE')/$value
semantic_en: "Cmplnc Oblgn Assign Cmplnc Rate - Cube"
semantic_vi: "Cmplnc Oblgn Assign Cmplnc Rate - Cube — CDS view giao diện dựa trên P_CmplOblAsgtFulfilledAndNull."
keywords:
  - "cmplnc"
  - "oblgn"
  - "assign"
  - "rate"
  - "cube"
  - "obligation"
  - "assignment"
  - "location"
  - "name"
  - "compliance"
  - "assgmt"
  - "applty"
  - "status"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - bo:companycode
---
# I_CMPLOBLASGTCMPLNCRATECUBE

**Cmplnc Oblgn Assign Cmplnc Rate - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTCMPLNCRATECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` | ✓ | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `ComplianceObligationUUID` |  | |  |  | `RAW(16)` | Compliance Obligation |
| `CmplncOblgnAssgmtAppltyStatus` |  | |  |  | `CHAR(2)` | Applicability |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `CmplncOblgnAssgmtCmplncStatus` |  | |  |  | `CHAR(2)` | Status |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
| `CmplOblAsgtFulfilledUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `NumberOfFulfilledObligations` |  | |  | `cast( 0 as ehfnd_number_of_obligations )` | `INT4(10)` | Number of Obligations |
| `NumberOfRecords` |  | |  | `cast( 0 as ehfnd_number_of_obligations )` | `INT4(10)` | Number of Obligations |
| `CmplOblAsgtFlfmtAggrgdValue` |  | |  | `cast( case when CmplOblAsgtFulfilledUUID is null then 1 else 0 end as ehfnd_number_of_obligations )` | `INT4(10)` | Number of Obligations |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTCMPLNCRATECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTCMPLNCRATECUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cmplnc Oblgn Assign Cmplnc Rate - Cube'
@Analytics: { dataCategory:#CUBE, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{ serviceQuality: #D,
                         sizeCategory:  #L,
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
 
define view entity I_CmplOblAsgtCmplncRateCube
  as select from P_CmplOblAsgtFulfilledAndNull
{
  key CmplncObligationAssignmentUUID,

      @ObjectModel.text.element: ['EHSLocationName']
      EHSLocationUUID,

      @Semantics.text:true
      EHSLocationName,

      ComplianceObligationUUID,

      CmplncOblgnAssgmtAppltyStatus,

      ComplianceObligationTypeCode,
      
      CmplncOblgnAssgmtCmplncStatus,
      
      ComplianceObligationDomainCode,

      CmplOblAsgtFulfilledUUID,

      @Aggregation.default: #COUNT_DISTINCT
      @Aggregation.referenceElement: ['CmplOblAsgtFulfilledUUID']

      cast( 0 as ehfnd_number_of_obligations ) as NumberOfFulfilledObligations,


      @Aggregation.default: #COUNT_DISTINCT
      @Aggregation.referenceElement: ['CmplncObligationAssignmentUUID']
      cast( 0 as ehfnd_number_of_obligations ) as NumberOfRecords,

      @Aggregation.default: #MAX
      cast(
        case when CmplOblAsgtFulfilledUUID is null then 1 else 0 end
        as ehfnd_number_of_obligations
      )                                        as CmplOblAsgtFlfmtAggrgdValue

}
```
