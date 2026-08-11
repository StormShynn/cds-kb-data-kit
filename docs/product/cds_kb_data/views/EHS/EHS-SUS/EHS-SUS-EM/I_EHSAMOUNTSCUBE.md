---
name: I_EHSAMOUNTSCUBE
description: "This CDS view provides the data to answer the following business questions: What amount of a specific pollutant has been released for a given location over a certain period of time? Which locations in the company produce the most emissions? What is the highest sampled value of a pollutant? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSCUBE')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What amount of a specific pollutant has been released for a given location over a certain period of time? Which locations in the company produce the most emissions? What is the highest sampled value of a pollutant? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Environmental Data - Cube — CDS view giao diện dựa trên I_EHSAmountsForActivity."
keywords:
  - "environmental"
  - "data"
  - "cube"
  - "amount"
  - "main"
  - "location"
  - "classifier"
  - "name"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
---
# I_EHSAMOUNTSCUBE

**This CDS view provides the data to answer the following business questions: What amount of a specific pollutant has been released for a given location over a certain period of time? Which locations in the company produce the most emissions? What is the highest sampled value of a pollutant? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `EHSMainLocationID` | ✓ | |  | `_EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationID` | `CHAR(20)` | Location ID |
| `EHSDataClassifierID` | ✓ | | `_EHSDataClassifierForFilter` | `EHSDataClassifierID` | `CHAR(30)` | Data Classifier for Location Aggregation |
| `EHSLocClassifierID` | ✓ | | `_EHSLocClassifier._EHSClassifierRoot` | `EHSLocClassifierID` | `CHAR(40)` | BCO ID |
| `EHSMainLocationName` |  | |  | `_EHSLocationForFiltering(P_Date: $parameters.P_Date)._EHSLocationRevisionNameT[1: Language = $parameters.P_Language and RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationName` | `CHAR(60)` | Location |
| `EHSAmountSourceType` |  | |  |  | `CHAR(2)` | Data Source Type |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `EHSAmountUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EHSAmountUTCDate` |  | |  | `cast(tstmp_to_dats(EHSAmountsForActivity.EHSAmountUTCDateTime,'UTC',$session.client,'INITIAL') as ehfnd_date preserving type )` | `DATS(8)` | Date |
| `EHSAmountUTCYearMonth` |  | |  | `cast(substring(tstmp_to_dats(EHSAmountsForActivity.EHSAmountUTCDateTime,'UTC',$session.client,'INITIAL'),1,6) as ehfnd_yearmonth )` | `NUMC(6)` | Calendar Year and Month |
| `EHSAmountUTCYear` |  | |  | `cast(substring(tstmp_to_dats(EHSAmountsForActivity.EHSAmountUTCDateTime,'UTC',$session.client,'INITIAL'),1,4) as ehfnd_year_code )` | `NUMC(4)` | Year |
| `EHSAmountValue` |  | |  |  | `FLTP(16)` | Amount Value |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Measure Units of Various Types |
| `UnitOfMeasureDimension` |  | |  |  | `CHAR(6)` | Physical Dimension |
| `EHSAmountIsReplaced` |  | |  |  | `CHAR(1)` | Substituted Value |
| `EHSAmountDeviationID` |  | |  |  | `CHAR(20)` | Business Object ID |
| `EHSAmountIsPreliminary` |  | |  |  | `CHAR(1)` | Preliminary Result |
| `EHSAmountStatus` |  | |  |  | `CHAR(2)` | Amount Status |
| `EHSAmountExternalSource` |  | |  |  | `CHAR(80)` | External Source |
| `EHSComplianceScenActivityUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSComplianceScenActivityID` |  | |  |  | `CHAR(20)` | Data Collection Definition ID |
| `EHSComplianceScenActivityName` |  | |  |  | `CHAR(132)` | Data Collection Definition Name |
| `EHSComplianceScenActivityTitle` |  | |  |  | `CHAR(132)` | Description (Long) |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` | Data Period of Data Collection Definition |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSAmountIssueType` |  | |  |  | `CHAR(2)` | Amount Issue Type Values |
| `OrganizationalUnit` |  | |  | `cast ( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].OrganizationalUnit as ehfnd_org_unit_id_nc preserving type )` | `NUMC(8)` | Organizational Unit ID |
| `EHSLocationAuthorizationGroup` |  | |  | `cast( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type )` | `CHAR(21)` | Location Authorization Group |
| `EHSLocationID` |  | | `_EHSLocationRoot` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `EHSLocClassifiersText` |  | |  | `_EHSLocClassifiers(P_Langu: $parameters.P_Language).Classifiers` | `CHAR(255)` | List of Classifiers (Comma Separated) - short |
| `EHSDataClassifiersText` |  | | `_EHSDataClassifiers` | `Classifiers` | `CHAR(255)` | Data Classifiers |
| `EHSSubjectID` |  | | `_EHSSubject` | `EHSSubjectID` | `CHAR(20)` | id |
| `CASNumber` |  | | `_EHSSubject` | `CASNumber` | `CHAR(20)` | CAS Number |
| `NumberOfRecords` |  | |  | `0` | `INT1(3)` |  |
| `EHSAmountDataMaxQuantity` |  | |  | `EHSAmountValue` | `FLTP(16)` | Amount Value |
| `EHSAmountDataMinQuantity` |  | |  | `EHSAmountValue` | `FLTP(16)` | Amount Value |
| `_EHSLocationByIdentifier` | | ✓ | | | | |
| `_EHSLocationGeoPoint` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationForFiltering` | `I_EHSLocationForFiltering` | [1..*] |
| `_EHSLocationByIdentifier` | `I_EHSLocationByIdentifier` | [1..*] |
| `_EHSLocClassifier` | `I_EHSLocClassifier` | [0..*] |
| `_EHSDataClassifierForFilter` | `I_EHSDataClassifierForFilter` | [0..*] |
| `_EHSSubject` | `I_EHSSubject` | [0..1] |
| `_EHSLocation` | `I_EHSLocationRevision` | [1..*] |
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [1..1] |
| `_EHSLocClassifiers` | `P_EHSLOCCLASSIFIERS` | [0..1] |
| `_EHSDataClassifiers` | `P_EHSDataClassifiers` | [0..1] |
| `_EHSLocationGeoPoint` | `I_EHSLocationGeoPoint` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEHSAMNTCUBE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@EndUserText.label: 'Environmental Data - Cube'
@Analytics: { dataCategory:#CUBE, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType:{ serviceQuality: #D,
                         sizeCategory:  #XL,
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
define view I_EHSAmountsCube
  with parameters
    P_Date     : sydatum,
    P_Language : sylangu
  as select from I_EHSAmountsForActivity as EHSAmountsForActivity

  association [1..*] to I_EHSLocationForFiltering    as _EHSLocationForFiltering    on EHSAmountsForActivity.EHSLocationUUID = _EHSLocationForFiltering.EHSLocationUUID
  association [1..*] to I_EHSLocationByIdentifier    as _EHSLocationByIdentifier    on $projection.EHSMainLocationID = _EHSLocationByIdentifier.EHSLocationID

  association [0..*] to I_EHSLocClassifier           as _EHSLocClassifier           on EHSAmountsForActivity.EHSLocationUUID = _EHSLocClassifier.EHSLocationUUID
  association [0..*] to I_EHSDataClassifierForFilter as _EHSDataClassifierForFilter on EHSAmountsForActivity.EHSComplianceScenActivityUUID = _EHSDataClassifierForFilter.EHSComplianceScenActivityUUID
  association [0..1] to I_EHSSubject                 as _EHSSubject                 on EHSAmountsForActivity.EHSSubjectUUID = _EHSSubject.EHSSubjectUUID
  association [1..*] to I_EHSLocationRevision        as _EHSLocation                on EHSAmountsForActivity.EHSLocationUUID = _EHSLocation.EHSLocationUUID
  association [1..1] to I_EHSLocationRoot            as _EHSLocationRoot            on $projection.EHSLocationUUID = _EHSLocationRoot.EHSLocationUUID

  association [0..1] to P_EHSLOCCLASSIFIERS          as _EHSLocClassifiers          on $projection.EHSLocationUUID = _EHSLocClassifiers.EHSLocationUUID
  association [0..1] to P_EHSDataClassifiers         as _EHSDataClassifiers         on $projection.EHSComplianceScenActivityUUID = _EHSDataClassifiers.EHSComplianceScenActivityUUID

  association [1..*] to I_EHSLocationGeoPoint        as _EHSLocationGeoPoint        on $projection.ehslocationid = _EHSLocationGeoPoint.EHSLocationID

{
      @EndUserText.label: 'Amount Key'
  key EHSAmountsForActivity.EHSAmountUUID,
      //    Fields exposed for filtering. Filtering by multiple values or adding field to result will lead to duplicate results
      @ObjectModel.foreignKey.association: '_EHSLocationByIdentifier'
      @EndUserText.label: 'Main Location ID'
  key _EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationID                                                                                                                                                     as EHSMainLocationID,

  key _EHSDataClassifierForFilter.EHSDataClassifierID,
      @EndUserText.label: 'Location Classifier ID'
  key _EHSLocClassifier._EHSClassifierRoot.EHSLocClassifierID,

      @EndUserText.label: 'Main Location Name'
      _EHSLocationForFiltering(P_Date: $parameters.P_Date)._EHSLocationRevisionNameT[1: Language = $parameters.P_Language and RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date  ].EHSLocationName as EHSMainLocationName,
      EHSAmountsForActivity.EHSAmountSourceType,
      EHSAmountsForActivity.EHSSubjectType,
      @EndUserText.label: 'Subject Key'
      EHSAmountsForActivity.EHSSubjectUUID,
      @EndUserText.label: 'Timestamp'
      EHSAmountsForActivity.EHSAmountUTCDateTime,
      @Semantics.calendar.dayOfYear: true
      @EndUserText.label: 'Date'
      cast(tstmp_to_dats(EHSAmountsForActivity.EHSAmountUTCDateTime,'UTC',$session.client,'INITIAL') as ehfnd_date preserving type )                                                                                               as EHSAmountUTCDate,
      @Semantics.calendar.yearMonth: true
      cast(substring(tstmp_to_dats(EHSAmountsForActivity.EHSAmountUTCDateTime,'UTC',$session.client,'INITIAL'),1,6) as ehfnd_yearmonth )                                                                                           as EHSAmountUTCYearMonth,
      @Semantics.calendar.year: true
      cast(substring(tstmp_to_dats(EHSAmountsForActivity.EHSAmountUTCDateTime,'UTC',$session.client,'INITIAL'),1,4) as ehfnd_year_code )                                                                                           as EHSAmountUTCYear,
      EHSAmountsForActivity.EHSAmountValue,
      EHSAmountsForActivity.UnitOfMeasure,
      EHSAmountsForActivity.UnitOfMeasureDimension,
      @Semantics.booleanIndicator
      EHSAmountsForActivity.EHSAmountIsReplaced,
      @EndUserText.label: 'Deviation ID'
      EHSAmountsForActivity.EHSAmountDeviationID,
      @Semantics.booleanIndicator
      EHSAmountsForActivity.EHSAmountIsPreliminary,
      EHSAmountsForActivity.EHSAmountStatus,
      EHSAmountsForActivity.EHSAmountExternalSource,
      @EndUserText.label: 'Activity Key'
      EHSAmountsForActivity.EHSComplianceScenActivityUUID,
      @EndUserText.label: 'Activity ID'
      EHSAmountsForActivity.EHSComplianceScenActivityID,
      @EndUserText.label: 'Activity Name'
      EHSAmountsForActivity.EHSComplianceScenActivityName,
      @EndUserText.label: 'Activity Title'
      EHSAmountsForActivity.EHSComplianceScenActivityTitle,
      @EndUserText.label: 'Data Period'
      EHSAmountsForActivity.DataUsagePeriodicity,
      @EndUserText.label: 'Location Key'
      EHSAmountsForActivity.EHSLocationUUID,
      @EndUserText.label: 'Issue Type'
      EHSAmountsForActivity.EHSAmountIssueType,
      @EndUserText.label: 'Data Source Type Name'
      EHSAmountsForActivity._EHSAmountSourceType._Text[1: Language = $parameters.P_Language].EHSAmountSourceTypeName,
      @EndUserText.label: 'Unit of Measurement Description'
      EHSAmountsForActivity._UnitText._Text[1: Language = $parameters.P_Language].UnitOfMeasureName,
      EHSAmountsForActivity._UnitText._DimensionText[1: Language = $parameters.P_Language].UnitOfMeasureDimensionName,
      @EndUserText.label: 'Status Name'
      EHSAmountsForActivity._EHSAmountStatus._Text[1: Language = $parameters.P_Language].EHSAmountStatusName,
      @EndUserText.label: 'Data Period Text'
      EHSAmountsForActivity._EHSDataPeriod._Text[1: Language = $parameters.P_Language].EHSDataPeriodText,
      @EndUserText.label: 'Issue Type Text'
      EHSAmountsForActivity._EHSAmountIssueTypeText[1: Language = $parameters.P_Language].EHSAmountIssueTypeText,

      @EndUserText.label: 'Location Name'
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._EHSLocationRevisionName[1: Language = $parameters.P_Language].EHSLocationName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationType,

      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationRevisionUUID,

      @EndUserText.label: 'Location Type Name'
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._EHSLocationType._Text[1: Language = $parameters.P_Language].EHSLocationTypeText,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].Country,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._Country._Text[1: Language = $parameters.P_Language].CountryName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].Region,
      @EndUserText.label: 'Region Name'
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._Region._RegionText[1: Language = $parameters.P_Language].RegionName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].Plant,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._Plant.PlantName,
      cast ( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].OrganizationalUnit as ehfnd_org_unit_id_nc preserving type )                                                       as OrganizationalUnit,
      @EndUserText.label: 'Organizational Unit Name'
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._OrganizationalUnit._OrgUnitText[1: Language = $parameters.P_Language].OrganizationalUnitName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].ControllingArea,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._ControllingArea.ControllingAreaName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].CostCenter,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._CostCenter[1: ValidityStartDate <= $parameters.P_Date and ValidityEndDate >= $parameters.P_Date]._Text[1: Language = $parameters.P_Language].CostCenterName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].CompanyCode,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._CompanyCode.CompanyCodeName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationStatus,
      cast( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type )                                          as EHSLocationAuthorizationGroup,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].BusinessArea,


      @ObjectModel.foreignKey.association: '_EHSLocationGeoPoint'
      @ObjectModel.text.element: ['EHSLocationName']
      _EHSLocationRoot.EHSLocationID,

      _EHSLocClassifiers(P_Langu: $parameters.P_Language).Classifiers                                                                                                                                                              as EHSLocClassifiersText,
      _EHSDataClassifiers.Classifiers                                                                                                                                                                                              as EHSDataClassifiersText,


      @EndUserText.label: 'Subject ID'
      _EHSSubject.EHSSubjectID,
      _EHSSubject.CASNumber,
      @EndUserText.label: 'Subject Name'
      _EHSSubject._Text[1: Language = $parameters.P_Language ].EHSSubjectText,

      @Aggregation.default: #COUNT_DISTINCT
      @Aggregation.referenceElement: ['EHSAmountUUID']
      @EndUserText.label: 'Number of Records'
      0                                                                                                                                                                                                                            as NumberOfRecords,

      @DefaultAggregation: #MAX
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      @EndUserText.label: 'Maximum Amount'
      EHSAmountsForActivity.EHSAmountValue                                                                                                                                                                                         as EHSAmountDataMaxQuantity,

      @DefaultAggregation: #MIN
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      @EndUserText.label: 'Minimum Amount'
      EHSAmountsForActivity.EHSAmountValue

                                                                                                                                                                                                                                   as EHSAmountDataMinQuantity,
      _EHSLocationGeoPoint,
      _EHSLocationByIdentifier

}
```
