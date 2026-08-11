---
name: I_EHSCMPLRQPARAGRAPHCUBE
description: "This CDS view provides the data to answer the following business question: What data is available for compliance requirement paragraphs and related objects, such as location, and location classifier? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities. To find out what use cases are best supported by this CDS view, access the CDS view entry in the View Browser app, and find the values for this annotation under the Annotation tab. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCMPLRQPARAGRAPHCUBE')/$value
semantic_en: "This CDS view provides the data to answer the following business question: What data is available for compliance requirement paragraphs and related objects, such as location, and location classifier? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities. To find out what use cases are best supported by this CDS view, access the CDS view entry in the View Browser app, and find the values for this annotation under the Annotation tab. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Compliance Requirement Paragraph - Cube — CDS view giao diện dựa trên I_CmplRqVersEnhanced."
keywords:
  - "compliance"
  - "requirement"
  - "paragraph"
  - "cube"
  - "cmpl"
  - "vers"
  - "child"
  - "main"
  - "location"
  - "classifier"
  - "applty"
  - "area"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
---
# I_EHSCMPLRQPARAGRAPHCUBE

**This CDS view provides the data to answer the following business question: What data is available for compliance requirement paragraphs and related objects, such as location, and location classifier? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities. To find out what use cases are best supported by this CDS view, access the CDS view entry in the View Browser app, and find the values for this annotation under the Annotation tab. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCMPLRQPARAGRAPHCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplRqVersChildUUID` | ✓ | | `_ContentStructureNode` | `CmplRqVersChildUUID` | `RAW(16)` | NodeID |
| `EHSMainLocationUUID` | ✓ | |  | `_EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationUUID` | `RAW(16)` | Location |
| `EHSLocClassifierRefUUID` | ✓ | | `_ContentStructureNode._CmplRqClassifier` | `EHSLocClassifierRefUUID` | `RAW(16)` | NodeID |
| `CmplRqVersUUID` | ✓ | | `_CmplRqVers` | `CmplRqVersUUID` | `RAW(16)` | Compliance Requirement UUID |
| `CmplRqVersAppltyAreaUUID` | ✓ | | `_CmplRqVers._CmplRqVersAppltyArea` | `CmplRqVersAppltyAreaUUID` | `RAW(16)` | NodeID |
| `EHSMainLocationID` |  | |  | `_EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationID` | `CHAR(20)` | Location ID |
| `EHSLocClassifierID` |  | | `_ContentStructureNode._CmplRqClassifier._EHSLocClassifier._EHSClassifierRoot` | `EHSLocClassifierID` | `CHAR(40)` | BCO ID |
| `CmplRqVersParagraphName` |  | |  | `cast(left( _ContentStructureNode.CmplRqVersParagraphName, 250 ) as ehfnd_req_paragraph_short preserving type )` | `CHAR(250)` | Paragraph Name |
| `CmplRqVersParagraphID` |  | | `_ContentStructureNode` | `CmplRqVersParagraphID` | `CHAR(30)` | Compliance Requirement Paragraph ID |
| `CmplRqAmendmentDate` |  | | `_ContentStructureNode` | `CmplRqAmendmentDate` | `DATS(8)` | Amendment Date |
| `CmplRqContentName` |  | |  | `cast(left( _ContentStructureNode.CmplRqContentName, 250 )as ehfnd_req_content_name_sort preserving type )` | `CHAR(250)` | Compliance Requirement Paragraph Content Name |
| `CmplRqLegalTextName` |  | |  | `cast(left(_ContentStructureNode.CmplRqLegalTextName, 250 ) as ehfnd_req_legal_link_text_shrt preserving type )` | `CHAR(250)` | Compliance Requirement Legal Text Link |
| `CmplRqVersParagraphType` |  | | `_ContentStructureNode` | `CmplRqVersParagraphType` | `CHAR(20)` | Compliance Requirement Paragraph Type |
| `EHSLocClassifiersText` |  | |  | `cast(left(_EHSLocClassifiers(P_Langu: $parameters.P_Language).Classifiers, 250) as ehfnd_loc_clsf_text_short preserving type )` | `CHAR(250)` | Location Classifier Text |
| `CmplRqVersName` |  | |  | `cast(left(_CmplRqVers.CmplRqVersName, 250) as ehfnd_crr_name_short preserving type)` | `CHAR(250)` | Compliance Requirement Name |
| `CmplRqDomain` |  | |  | `cast( _CmplRqVers.CmplRqDomain as ehfnd_req_domain_nce preserving type )` | `CHAR(21)` | Compliance Requirement Domain |
| `IssuingOrganization` |  | | `_CmplRqVers` | `IssuingOrganization` | `CHAR(80)` | Issuing Organization |
| `BusinessPartner` |  | |  | `cast( _EHSCmplRqPermit.BusinessPartner as bu_partner preserving type )` | `CHAR(10)` | Business Partner Number |
| `EffectiveDate` |  | | `_CmplRqVers` | `EffectiveDate` | `DATS(8)` | Effective Date |
| `CmplRqVersValidToDate` |  | | `_CmplRqVers` | `CmplRqVersValidToDate` | `DATS(8)` | Expiration Date |
| `CmplRqVersValidFromYear` |  | |  | `cast(substring(_CmplRqVers.EffectiveDate,1,4) as ehfnd_year_code )` | `NUMC(4)` | Year |
| `CmplRqVersValidToYear` |  | |  | `cast(substring(_CmplRqVers.CmplRqVersValidToDate,1,4) as ehfnd_year_code )` | `NUMC(4)` | Year |
| `CmplRqVersMaintStatus` |  | | `_CmplRqVers` | `CmplRqVersMaintStatus` | `CHAR(2)` | Compliance Requirement Status |
| `CmplRqType` |  | | `_CmplRqVers` | `CmplRqType` | `CHAR(2)` | Compliance Requirement Type |
| `CmplRqApplicationComponent` |  | | `_CmplRqVers` | `CmplRqApplicationComponent` | `CHAR(5)` | Request Initiator |
| `CmplRqVersEHSLocationUUID` |  | | `_CmplRqVers` | `CmplRqVersEHSLocationUUID` | `RAW(16)` | Location |
| `EHSLocationID` |  | | `_EHSLocationRoot` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `EHSLocationAuthorizationGroup` |  | |  | `cast( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type )` | `CHAR(21)` | Location Authorization Group |
| `ContentProvider` |  | | `_CmplRqVers` | `ContentProvider` | `CHAR(30)` | Content Provider |
| `Country` |  | | `_CmplRqVers._CmplRqVersAppltyArea` | `Country` | `CHAR(3)` | Country/Region |
| `Region` |  | | `_CmplRqVers._CmplRqVersAppltyArea` | `Region` | `CHAR(3)` | Region |
| `CmplRqVersPermitNumber` |  | | `_CmplRqVers` | `CmplRqVersPermitNumber` | `CHAR(80)` | Permit Number |
| `EHSCmplRqPermitLifecycle` |  | | `_EHSCmplRqPermit` | `EHSCmplRqPermitLifecycle` | `CHAR(2)` | Permit Lifecycle ID |
| `ComplianceRequirement` |  | | `_CmplRqVers` | `ComplianceRequirement` | `CHAR(30)` | Compliance Requirement |
| `NumberOfRecords` |  | |  | `0` | `INT1(3)` |  |
| `_EHSLocation` | | ✓ | | | | |
| `_EHSLocationRoot` | | ✓ | | | | |
| `_EHSLocationForFiltering` | | ✓ | | | | |
| `_EHSCmplRqPermit` | | ✓ | | | | |
| `_ContentStructureNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocation` | `I_EHSLocationRevision` | [0..*] |
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [0..1] |
| `_EHSLocationForFiltering` | `I_EHSLocationForFiltering` | [0..*] |
| `_EHSLocClassifiers` | `P_EHSLOCCLASSIFIERS` | [0..1] |
| `_EHSCmplRqPermit` | `I_EHSCmplRqPermit` | [1..1] |
| `_ContentStructureNode` | `I_EHSCmplRqPmtCntntStruc` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCMPLRQPARAGRAPHCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCMPLRQPARAGRAPHCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Compliance Requirement Paragraph - Cube'
@Analytics: { dataCategory:#CUBE, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType:{ serviceQuality: #D,
                         sizeCategory:  #XL,
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view entity I_EHSCmplRqParagraphCube
  with parameters
    P_Date     : sydatum,
    P_Language : sylangu
  as select from I_CmplRqVersEnhanced as _CmplRqVers
  association [0..*] to I_EHSLocationRevision     as _EHSLocation             on $projection.CmplRqVersEHSLocationUUID = _EHSLocation.EHSLocationUUID
  association [0..1] to I_EHSLocationRoot         as _EHSLocationRoot         on $projection.CmplRqVersEHSLocationUUID = _EHSLocationRoot.EHSLocationUUID
  association [0..*] to I_EHSLocationForFiltering as _EHSLocationForFiltering on $projection.CmplRqVersEHSLocationUUID = _EHSLocationForFiltering.EHSLocationUUID
  association [0..1] to P_EHSLOCCLASSIFIERS       as _EHSLocClassifiers       on $projection.CmplRqVersEHSLocationUUID = _EHSLocClassifiers.EHSLocationUUID
  association [1..1] to I_EHSCmplRqPermit         as _EHSCmplRqPermit         on $projection.CmplRqVersUUID = _EHSCmplRqPermit.CmplRqVersUUID
  association [1..*] to I_EHSCmplRqPmtCntntStruc  as _ContentStructureNode    on $projection.CmplRqVersUUID = _ContentStructureNode.CmplRqVersUUID
{
      @EndUserText.label: 'Paragraph Key'
  key _ContentStructureNode.CmplRqVersChildUUID,
  key _EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationUUID                                                                                                          as EHSMainLocationUUID,
      @EndUserText.label: 'Paragraph Classifier Key'
  key _ContentStructureNode._CmplRqClassifier.EHSLocClassifierRefUUID,
      @EndUserText.label: 'Compliance Requirement Key'
  key _CmplRqVers.CmplRqVersUUID,
  key _CmplRqVers._CmplRqVersAppltyArea.CmplRqVersAppltyAreaUUID,

      @EndUserText.label: 'Main Location ID'
      _EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationID                                                                                                            as EHSMainLocationID,
      @EndUserText.label: 'Location Classifier ID'
      _ContentStructureNode._CmplRqClassifier._EHSLocClassifier._EHSClassifierRoot.EHSLocClassifierID,
      @EndUserText.label: 'Paragraph Name'
      cast(left( _ContentStructureNode.CmplRqVersParagraphName, 250 ) as ehfnd_req_paragraph_short preserving type )                                                                      as CmplRqVersParagraphName,
      @EndUserText.label: 'Paragraph ID'
      _ContentStructureNode.CmplRqVersParagraphID,
      @EndUserText.label: 'Paragraph Amendment Date'
      _ContentStructureNode.CmplRqAmendmentDate,
      @EndUserText.label: 'Paragraph Content Ref. Name'
      cast(left( _ContentStructureNode.CmplRqContentName, 250 )as ehfnd_req_content_name_sort preserving type )                                                                           as CmplRqContentName,
      @EndUserText.label: 'Paragraph Legal Text Ref. Name'
      cast(left(_ContentStructureNode.CmplRqLegalTextName, 250 ) as ehfnd_req_legal_link_text_shrt preserving type )                                                                      as CmplRqLegalTextName,
      @EndUserText.label: 'Paragraph Type'
      _ContentStructureNode.CmplRqVersParagraphType,
      @EndUserText.label: 'Location Classifier'
      cast(left(_EHSLocClassifiers(P_Langu: $parameters.P_Language).Classifiers, 250) as ehfnd_loc_clsf_text_short preserving type )                                                      as EHSLocClassifiersText,

      @EndUserText.label: 'Compl. Req. Name'
      cast(left(_CmplRqVers.CmplRqVersName, 250) as ehfnd_crr_name_short preserving type)                                                                                                 as CmplRqVersName,
      @EndUserText.label: 'Compl. Req. Domain'
      cast( _CmplRqVers.CmplRqDomain as ehfnd_req_domain_nce preserving type )                                                                                                            as CmplRqDomain,
      @EndUserText.label: 'Compl. Req. Domain Name'
      _CmplRqVers._CmplRqDomain._Text[1: Language = $parameters.P_Language].CmplRqDomainText,
      @EndUserText.label: 'Issuing Organization'
      _CmplRqVers.IssuingOrganization,
      @EndUserText.label: 'Issuing Authority BP'
      cast( _EHSCmplRqPermit.BusinessPartner as bu_partner preserving type )                                                                                                              as BusinessPartner,
      @EndUserText.label: 'Compl. Req. Effective Date'
      _CmplRqVers.EffectiveDate,
      @EndUserText.label: 'Compl. Req. Expiration Date'
      _CmplRqVers.CmplRqVersValidToDate,
      @EndUserText.label: 'Valid From Year'
      @Semantics.calendar.year: true
      cast(substring(_CmplRqVers.EffectiveDate,1,4) as ehfnd_year_code )                                                                                                                  as CmplRqVersValidFromYear,
      @EndUserText.label: 'Valid To Year'
      @Semantics.calendar.year: true
      cast(substring(_CmplRqVers.CmplRqVersValidToDate,1,4) as ehfnd_year_code )                                                                                                          as CmplRqVersValidToYear,
      @EndUserText.label: 'Compl. Req. Revision Status'
      _CmplRqVers.CmplRqVersMaintStatus,
      @EndUserText.label: 'Compl. Req. Type'
      _CmplRqVers.CmplRqType,
      @EndUserText.label: 'Compl. Req. Type Name'
      _CmplRqVers._CmplncRqmtType._Text[1: Language = $parameters.P_Language].CmplRqTypeName,
      _CmplRqVers.CmplRqApplicationComponent,
      _CmplRqVers.CmplRqVersEHSLocationUUID,
      _EHSLocationRoot.EHSLocationID,
      @EndUserText.label: 'Location Name'
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._EHSLocationRevisionName[1: Language = $parameters.P_Language].EHSLocationName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationType,
      @EndUserText.label: 'Location Type Name'
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._EHSLocationType._Text[1: Language = $parameters.P_Language].EHSLocationTypeText,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationStatus,
      cast( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type ) as EHSLocationAuthorizationGroup,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].Plant,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].CostCenter,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].CompanyCode,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].BusinessArea,

      @EndUserText.label: 'Content Provider'
      _CmplRqVers.ContentProvider,
      _CmplRqVers._CmplRqVersAppltyArea.Country,
      @EndUserText.label: 'Country Name'
      _CmplRqVers._CmplRqVersAppltyArea._CountryText[1: Language = $parameters.P_Language ].CountryName,
      _CmplRqVers._CmplRqVersAppltyArea.Region,
      @EndUserText.label: 'Region Name'
      _CmplRqVers._CmplRqVersAppltyArea._RegionText[1: Language = $parameters.P_Language ].RegionName,
      @EndUserText.label: 'Permit Number'
      _CmplRqVers.CmplRqVersPermitNumber,
      @EndUserText.label: 'Permit Lifecycle'
      _EHSCmplRqPermit.EHSCmplRqPermitLifecycle,
      @EndUserText.label: 'Permit Lifecycle Name'
      _EHSCmplRqPermit._PermitLifecycleText[1: Language = $parameters.P_Language].EHSCmplRqPermitLifecycleName,

      @EndUserText.label: 'Compliance Requirement ID'
      _CmplRqVers.ComplianceRequirement,
      @Aggregation.default: #COUNT_DISTINCT
      @Aggregation.referenceElement: ['CmplRqVersChildUUID']
      @EndUserText.label: 'Number of Records'
      0                                                                                                                                                                                   as NumberOfRecords,

      _EHSLocation,
      _EHSLocationRoot,
      _EHSLocationForFiltering,
      _EHSCmplRqPermit,
      _ContentStructureNode
}
```
