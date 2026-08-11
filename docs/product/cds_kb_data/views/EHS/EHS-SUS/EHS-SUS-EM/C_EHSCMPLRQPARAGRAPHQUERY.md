---
name: C_EHSCMPLRQPARAGRAPHQUERY
description: "This CDS view retrieves and counts the number of compliance requirement paragraphs. It allows you to aggregate and filter them by multiple characteristics and related objects, such as location or location classifier. This CDS view provides the data to answer the following business questions: What number of compliance requirement paragraphs are related to any particular location or location classifier? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCMPLRQPARAGRAPHQUERY')/$value
semantic_en: "This CDS view retrieves and counts the number of compliance requirement paragraphs. It allows you to aggregate and filter them by multiple characteristics and related objects, such as location or location classifier. This CDS view provides the data to answer the following business questions: What number of compliance requirement paragraphs are related to any particular location or location classifier? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Compliance Requirement Paragraph - Query — CDS view tiêu dùng dựa trên I_EHSCmplRqParagraphCube."
keywords:
  - "compliance"
  - "requirement"
  - "paragraph"
  - "query"
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
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
---
# C_EHSCMPLRQPARAGRAPHQUERY

**This CDS view retrieves and counts the number of compliance requirement paragraphs. It allows you to aggregate and filter them by multiple characteristics and related objects, such as location or location classifier. This CDS view provides the data to answer the following business questions: What number of compliance requirement paragraphs are related to any particular location or location classifier? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCMPLRQPARAGRAPHQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplRqVersChildUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `EHSMainLocationUUID` | ✓ | |  |  | `RAW(16)` | Location |
| `EHSLocClassifierRefUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `CmplRqVersUUID` | ✓ | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `CmplRqVersAppltyAreaUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `EHSMainLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocClassifierID` |  | |  |  | `CHAR(40)` | BCO ID |
| `CmplRqVersParagraphID` |  | |  |  | `CHAR(30)` | Compliance Requirement Paragraph ID |
| `CmplRqVersParagraphName` |  | |  |  | `CHAR(250)` | Paragraph Name |
| `CmplRqAmendmentDate` |  | |  |  | `DATS(8)` | Amendment Date |
| `CmplRqContentName` |  | |  |  | `CHAR(250)` | Compliance Requirement Paragraph Content Name |
| `CmplRqLegalTextName` |  | |  |  | `CHAR(250)` | Compliance Requirement Legal Text Link |
| `CmplRqVersParagraphType` |  | |  |  | `CHAR(20)` | Compliance Requirement Paragraph Type |
| `EHSLocClassifiersText` |  | |  |  | `CHAR(250)` | Location Classifier Text |
| `CmplRqVersName` |  | |  |  | `CHAR(250)` | Compliance Requirement Name |
| `CmplRqDomain` |  | |  |  | `CHAR(21)` | Compliance Requirement Domain |
| `CmplRqDomainText` |  | |  |  | `CHAR(40)` | Compliance Requirement Domain Description |
| `IssuingOrganization` |  | |  |  | `CHAR(80)` | Issuing Organization |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `EffectiveDate` |  | |  |  | `DATS(8)` | Effective Date |
| `CmplRqVersValidToDate` |  | |  |  | `DATS(8)` | Expiration Date |
| `CmplRqVersValidFromYear` |  | |  |  | `NUMC(4)` | Year |
| `CmplRqVersValidToYear` |  | |  |  | `NUMC(4)` | Year |
| `CmplRqVersMaintStatus` |  | |  |  | `CHAR(2)` | Compliance Requirement Status |
| `CmplRqType` |  | |  |  | `CHAR(2)` | Compliance Requirement Type |
| `CmplRqTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CmplRqApplicationComponent` |  | |  |  | `CHAR(5)` | Request Initiator |
| `CmplRqVersPermitNumber` |  | |  |  | `CHAR(80)` | Permit Number |
| `EHSCmplRqPermitLifecycle` |  | |  |  | `CHAR(2)` | Permit Lifecycle ID |
| `EHSCmplRqPermitLifecycleName` |  | |  |  | `CHAR(60)` | Permit Lifecycle Name |
| `ComplianceRequirement` |  | |  |  | `CHAR(30)` | Compliance Requirement |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationTypeText` |  | |  |  | `CHAR(40)` | Location Type Name |
| `ContentProvider` |  | |  |  | `CHAR(30)` | Content Provider |
| `Country` |  | |  | `[{ entity: { name: 'I_CountryVH', element: 'Country' } }] Country` | `CHAR(3)` | Country/Region |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `RegionName` |  | |  |  | `CHAR(20)` | Description |
| `NumberOfRecords` |  | |  |  | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCMPLRQPARAGRAPHQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCMPLRQPARAGRAPHQUERY')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Compliance Requirement Paragraph - Query'

@Analytics.query: true
@VDM.viewType: #CONSUMPTION

@ObjectModel.usageType:{ serviceQuality: #D,        // < 15 msec
                         sizeCategory:  #XL,        // < 10.000.000
                         dataClass: #MIXED }

@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.ignorePropagatedAnnotations: true

define view entity C_EHSCmplRqParagraphQuery
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_Date     : sydatum,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu
  as select from I_EHSCmplRqParagraphCube( P_Date: $parameters.P_Date,
                                           P_Language: $parameters.P_Language )
{
  key CmplRqVersChildUUID,

      @Consumption.hidden: true
  key EHSMainLocationUUID,
      
  key EHSLocClassifierRefUUID,
      
  key CmplRqVersUUID,
      @Consumption.hidden: true
  key CmplRqVersAppltyAreaUUID,

      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false}
      EHSMainLocationID,

      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSLocClassifierID,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqVersParagraphID,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqVersParagraphName,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
      CmplRqAmendmentDate,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqContentName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqLegalTextName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqVersParagraphType,

      @Semantics.text: true
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSLocClassifiersText,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqVersName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqDomain,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqDomainText,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      IssuingOrganization,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      BusinessPartner,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
      EffectiveDate,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
      CmplRqVersValidToDate,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
      CmplRqVersValidFromYear,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
      CmplRqVersValidToYear,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqVersMaintStatus,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['CmplRqTypeName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqType,

      @Semantics.text: true
      CmplRqTypeName,

      @AnalyticsDetails.query.axis: #FREE
      CmplRqApplicationComponent,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqVersPermitNumber,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSCmplRqPermitLifecycle,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSCmplRqPermitLifecycleName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      ComplianceRequirement,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      @ObjectModel.text.element: ['EHSLocationName']
      EHSLocationID,

      @Semantics.text: true
      EHSLocationName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['EHSLocationTypeText']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSLocationType,

      @Semantics.text: true
      EHSLocationTypeText,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      ContentProvider,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['CountryName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      @Consumption.valueHelpDefinition:
      [{ entity: {
            name: 'I_CountryVH',
            element: 'Country' } }]
      Country,

      @Semantics.text: true
      CountryName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['RegionName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      Region,

      @Semantics.text: true
      RegionName,

      @EndUserText.label: 'Number of Records'
      @AnalyticsDetails.query.axis: #COLUMNS
      NumberOfRecords
}
```
