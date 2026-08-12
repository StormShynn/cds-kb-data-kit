---
name: I_CMPLNCOBLGNASSIGNMENTCUBE
description: "This CDS view helps to retrieve the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many compliance obligation assignments are in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCOBLGNASSIGNMENTCUBE')/$value
semantic_en: "This CDS view helps to retrieve the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many compliance obligation assignments are in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Compliance Obligations Assignment - Cube — CDS view giao diện dựa trên I_CmplncObligationAssignment."
keywords:
  - "compliance"
  - "obligations"
  - "assignment"
  - "cube"
  - "cmplnc"
  - "obligation"
  - "location"
  - "name"
  - "oblgn"
  - "assgmt"
  - "applty"
  - "status"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_CMPLNCOBLGNASSIGNMENTCUBE

**This CDS view helps to retrieve the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many compliance obligation assignments are in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCOBLGNASSIGNMENTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` | ✓ | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | | `_EHSLocNameFallbackLanguage` | `EHSLocationName` | `CHAR(60)` | Location Revision Text |
| `ComplianceObligationUUID` |  | |  |  | `RAW(16)` | Compliance Obligation |
| `CmplncOblgnAssgmtAppltyStatus` |  | |  |  | `CHAR(2)` | Applicability |
| `CmplncOblgnAssgmtCmplncStatus` |  | |  |  | `CHAR(2)` | Status |
| `ComplianceObligationTypeCode` |  | | `_ComplianceObligation` | `ComplianceObligationTypeCode` | `CHAR(2)` | Compliance Obligation Type |
| `NumberOfRecords` |  | |  | `cast( 0 as ehfnd_number_of_obligations )` | `INT4(10)` | Number of Obligations |
| `NumberOfFulfilledObligations` |  | |  | `cast( 0 as ehfnd_number_fulfilled_obl )` | `INT4(10)` | Number of Fulfilled Obligations |
| `CmplOblAsgtFulfilledUUID` |  | |  | `case CmplncObligation.CmplncOblgnAssgmtCmplncStatus when '02' then CmplncObligationAssignmentUUID when '03' then CmplncObligationAssignmentUUID else hextobin('00000000000000000000000000000000') end` | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceObligationDomainCode` |  | | `_ObligationDomain` | `ComplianceObligationDomainCode` | `CHAR(21)` | Compliance Obligation Domain |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ObligationDomain` | `I_ComplianceObligationDomain` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCOBLGNASSIGNMENTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCOBLGNASSIGNMENTCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Compliance Obligations Assignment - Cube'
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

define view entity I_CmplncOblgnAssignmentCube

  as select from I_CmplncObligationAssignment as CmplncObligation
  association [0..*] to I_ComplianceObligationDomain as _ObligationDomain on $projection.ComplianceObligationUUID = _ObligationDomain.ComplianceObligationUUID
{
  key CmplncObligationAssignmentUUID              as CmplncObligationAssignmentUUID,

      @ObjectModel.text.element: ['EHSLocationName']
      EHSLocationUUID,

      @Semantics.text: true
      _EHSLocNameFallbackLanguage.EHSLocationName as EHSLocationName,

      ComplianceObligationUUID,

      @ObjectModel.text.element: ['CmplncOblgnAssgmtAppltyStsText']
      CmplncOblgnAssgmtAppltyStatus,

      @ObjectModel.text.element: ['CmplncOblgnAssgmtCmplncStsText']
      CmplncOblgnAssgmtCmplncStatus,

      @Semantics.text: true
      _CmplOblAsgtAppltyStatus._Text[1: Language = $session.system_language].CmplncOblgnAssgmtAppltyStsText,

      @Semantics.text: true
      _CmplOblAsgtCmplncStatus._Text[1: Language = $session.system_language].CmplncOblgnAssgmtCmplncStsText,

      @ObjectModel.text.element: ['CmplncOblgnTypeDescription']
      _ComplianceObligation.ComplianceObligationTypeCode,

      @Semantics.text: true
      _ComplianceObligation._ComplianceObligationTypeText[1: Language = $session.system_language].CmplncOblgnTypeDescription,

      @Aggregation.default: #COUNT_DISTINCT
      @Aggregation.referenceElement: ['CmplncObligationAssignmentUUID']
      cast( 0 as ehfnd_number_of_obligations )    as NumberOfRecords,

      @Aggregation.default: #COUNT_DISTINCT
      @Aggregation.referenceElement: ['CmplOblAsgtFulfilledUUID']
      cast( 0 as ehfnd_number_fulfilled_obl )     as NumberOfFulfilledObligations,


      case CmplncObligation.CmplncOblgnAssgmtCmplncStatus
                when '02' then CmplncObligationAssignmentUUID
                when '03' then CmplncObligationAssignmentUUID
                else  hextobin('00000000000000000000000000000000')
                end                               as CmplOblAsgtFulfilledUUID,

      _ObligationDomain.ComplianceObligationDomainCode
}
where
  IsDeleted = ' '
```
