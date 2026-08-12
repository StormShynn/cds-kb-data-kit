---
name: I_EHSDEVIATIONINCIDENTCUBE
description: "This CDS view retrieves the number of the open deviation incidents over a specific period of time. This CDS view provides the data to answer the following business questions: How many open deviation incidents are currently reported for each compliance requirement type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDEVIATIONINCIDENTCUBE')/$value
semantic_en: "This CDS view retrieves the number of the open deviation incidents over a specific period of time. This CDS view provides the data to answer the following business questions: How many open deviation incidents are currently reported for each compliance requirement type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Deviation Incident - Cube — CDS view giao diện dựa trên I_DeviationIncidentRoot."
keywords:
  - "deviation"
  - "incident"
  - "cube"
  - "main"
  - "location"
  - "report"
  - "required"
  - "code"
  - "cmpl"
  - "vers"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
  - bo:salesorganization
---
# I_EHSDEVIATIONINCIDENTCUBE

**This CDS view retrieves the number of the open deviation incidents over a specific period of time. This CDS view provides the data to answer the following business questions: How many open deviation incidents are currently reported for each compliance requirement type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDEVIATIONINCIDENTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeviationUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `EHSMainLocationID` | ✓ | |  | `_EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationID` | `CHAR(20)` | Location ID |
| `DeviationReportRequiredCode` |  | |  | `DeviationReportIsRequired` | `CHAR(1)` | Deviation Reporting Required |
| `IncidentRefUUID` |  | |  |  | `RAW(16)` | Incident Key |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `ComplianceRequirement` |  | |  |  | `CHAR(30)` | Compliance Requirement |
| `CmplRqDomain` |  | |  | `cast( DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced.CmplRqDomain as ehfnd_req_domain_nce preserving type )` | `CHAR(21)` | Compliance Requirement Domain |
| `CmplRqStatus` |  | |  |  | `CHAR(2)` | Compliance Requirement Status |
| `CmplRqType` |  | |  |  | `CHAR(2)` | Compliance Requirement Type |
| `CmplRqCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region |
| `CmplRqCountryName` |  | |  | `DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced._CmplRqVersAppltyArea._CountryText[1: Language = $parameters.P_Language ].CountryName` | `CHAR(50)` | Country/Region Name |
| `CmplRqRegion` |  | |  | `Region` | `CHAR(3)` | Region |
| `CmplRqRegionName` |  | |  | `DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced._CmplRqVersAppltyArea._RegionText[1: Language = $parameters.P_Language ].RegionName` | `CHAR(20)` | Description |
| `CmplRqVersPermitNumber` |  | |  |  | `CHAR(80)` | Permit Number |
| `EHSCmplRqPermitLifecycle` |  | |  |  | `CHAR(2)` | Permit Lifecycle ID |
| `BusinessPartner` |  | |  | `cast( DeviationIncidentRoot._EHSDeviationReq._EHSCmplRqPermit.BusinessPartner as bu_partner preserving type )` | `CHAR(10)` | Business Partner Number |
| `ComplianceRequirementNameText` |  | |  | `_CmplRequirements(P_Mandt: $session.client, P_Langu: $parameters.P_Language).CrNames` | `CHAR(255)` | Compliance Requirement Version Name |
| `IncidentCategory` |  | |  |  | `CHAR(3)` | Incident Category |
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
| `IncidentTitle` |  | |  |  | `CHAR(80)` | Incident Title |
| `IncidentTimeZone` |  | |  |  | `CHAR(6)` | Time Zone of Incident Start |
| `IncidentEndTimeZone` |  | |  |  | `CHAR(6)` | Time Zone for Incident End |
| `IncidentUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `IncidentUTCEndDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `IncidentDate` |  | |  |  | `DATS(8)` | Incident Start Date |
| `IncidentEndDate` |  | |  | `cast(tstmp_to_dats(DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCEndDateTime, $session.user_timezone,$session.client,'INITIAL') as ehhss_inc_end_date preserving type )` | `DATS(8)` | Incident End Date |
| `IncidentUTCYearMonth` |  | |  | `cast(substring(tstmp_to_dats(DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCDateTime, 'UTC',$session.client,'INITIAL'),1,6) as ehfnd_yearmonth )` | `NUMC(6)` | Calendar Year and Month |
| `IncidentUTCEndDateYearMonth` |  | |  | `cast(substring(tstmp_to_dats(DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCEndDateTime, 'UTC',$session.client,'INITIAL'),1,6) as ehfnd_yearmonth )` | `NUMC(6)` | Calendar Year and Month |
| `IncidentUTCYear` |  | |  | `cast(substring(tstmp_to_dats(DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCDateTime, 'UTC',$session.client,'INITIAL'),1,4) as ehfnd_year_code )` | `NUMC(4)` | Year |
| `IncidentUTCEndDateYear` |  | |  | `cast(substring(tstmp_to_dats(DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCEndDateTime, 'UTC',$session.client,'INITIAL'),1,4) as ehfnd_year_code )` | `NUMC(4)` | Year |
| `EHSLocationUUID` |  | | `_IncidentBasicInfo` | `EHSLocationUUID` | `RAW(16)` | Location |
| `IncidentAccessRestriction` |  | | `_IncidentBasicInfo` | `IncidentHasAccessRestriction` | `CHAR(1)` | Restricted Access to Incident Record |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of Incident |
| `Region` |  | |  |  | `CHAR(3)` | Region of Incident |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `EHSLocationID` |  | | `_EHSLocationRoot` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `NumberOfRecords` |  | |  | `cast(0 as ehfnd_number_of_records)` | `INT4(10)` | Number of Records |
| `_EHSLocationRoot` | | ✓ | | | | |
| `_EHSLocationForFiltering` | | ✓ | | | | |
| `_EHSLocation` | | ✓ | | | | |
| `_EHSLocationFilter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [0..1] |
| `_EHSLocationForFiltering` | `I_EHSLocationForFiltering` | [0..*] |
| `_EHSLocation` | `I_EHSLocationRevision` | [0..*] |
| `_CmplRequirements` | `P_CmplRqNamesOnDevInc` | [0..1] |
| `_EHSLocationFilter` | `I_EHSLocation` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDEVIATIONINCIDENTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDEVIATIONINCIDENTCUBE')/$value)*

```abap
@AccessControl.authorizationCheck:#MANDATORY
@EndUserText.label: 'Deviation Incident - Cube'
@Analytics.dataCategory: #CUBE
@Analytics.internalName: #LOCAL
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{ serviceQuality: #D,
                         sizeCategory:  #L,
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view entity I_EHSDeviationIncidentCube
  with parameters
    P_Date     : sydatum,
    P_Language : sylangu
  as select from           I_DeviationIncidentRoot as DeviationIncidentRoot
    inner join             I_IncidentBasicInfo     as _IncidentBasicInfo on DeviationIncidentRoot.IncidentRefUUID = _IncidentBasicInfo.IncidentUUID
    left outer to one join I_IncidentGroup         as _IncidentGroup     on DeviationIncidentRoot.IncidentRefUUID = _IncidentGroup.IncidentUUID

  association [0..1] to I_EHSLocationRoot         as _EHSLocationRoot         on $projection.EHSLocationUUID = _EHSLocationRoot.EHSLocationUUID
  association [0..*] to I_EHSLocationForFiltering as _EHSLocationForFiltering on $projection.EHSLocationUUID = _EHSLocationForFiltering.EHSLocationUUID
  association [0..*] to I_EHSLocationRevision     as _EHSLocation             on $projection.EHSLocationUUID = _EHSLocation.EHSLocationUUID
  association [0..1] to P_CmplRqNamesOnDevInc     as _CmplRequirements        on $projection.DeviationUUID = _CmplRequirements.DevIncUUID
  association [0..*] to I_EHSLocation             as _EHSLocationFilter       on $projection.EHSLocationUUID = _EHSLocationFilter.EHSLocationUUID

{
       @EndUserText.label: 'Deviation Incident Key'
  key  DeviationIncidentRoot.DeviationUUID,
  key  _EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationID                                                                         as EHSMainLocationID,
     
       DeviationIncidentRoot.DeviationReportIsRequired as                                                                                               DeviationReportRequiredCode,      
       DeviationIncidentRoot.IncidentRefUUID,

       @EndUserText.label: 'Compliance Requirement Key'
       DeviationIncidentRoot._EHSDeviationReq.CmplRqVersUUID,
       @EndUserText.label: 'Compliance Requirement Name'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqVersText[1: Language = $parameters.P_Language].CmplRqVersName,
       @EndUserText.label: 'Compliance Requirement ID'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReq.ComplianceRequirement,

       @EndUserText.label: 'Compliance Requirement Domain'
       cast( DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced.CmplRqDomain as ehfnd_req_domain_nce preserving type )                          as CmplRqDomain,
       @EndUserText.label: 'Compliance Requirement Domain Name'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced._CmplRqDomain._Text[1: Language = $parameters.P_Language].CmplRqDomainText,
      
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced._CmplncRqmtStatus.CmplRqStatus,
       @EndUserText.label: 'Compliance Requirement Status Name'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced._CmplncRqmtStatus._Text[1: Language = $parameters.P_Language].CmplRqStatusName,
       @EndUserText.label: 'Compliance Requirement Type'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced.CmplRqType,
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced._CmplRqIssgOrgText._Text[1: Language = $parameters.P_Language].IssuingOrganization,
       @EndUserText.label: 'Compliance Requirement Country/Region'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced._CmplRqVersAppltyArea.Country                                                         as CmplRqCountry,
       @EndUserText.label: 'Compliance Requirement Country Name'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced._CmplRqVersAppltyArea._CountryText[1: Language = $parameters.P_Language ].CountryName as CmplRqCountryName,
       @EndUserText.label: 'Compliance Requirement Region'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced._CmplRqVersAppltyArea.Region                                                          as CmplRqRegion,
       @EndUserText.label: 'Compliance Requirement Region Name'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced._CmplRqVersAppltyArea._RegionText[1: Language = $parameters.P_Language ].RegionName   as CmplRqRegionName,
       @EndUserText.label: 'Compliance Requirement Permit Number'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplReqEnhanced.CmplRqVersPermitNumber,
       @EndUserText.label: 'Permit Lifecycle'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplRqPermit.EHSCmplRqPermitLifecycle,
       @EndUserText.label: 'Permit Lifecycle Name'
       DeviationIncidentRoot._EHSDeviationReq._EHSCmplRqPermit._PermitLifecycleText[1: Language = $parameters.P_Language].EHSCmplRqPermitLifecycleName,
       @EndUserText.label: 'Issuing Authority BP'
       cast( DeviationIncidentRoot._EHSDeviationReq._EHSCmplRqPermit.BusinessPartner as bu_partner preserving type )                                    as BusinessPartner,

       @EndUserText.label: 'Compliance Requirements'
       _CmplRequirements(P_Mandt: $session.client, P_Langu: $parameters.P_Language).CrNames                                                             as ComplianceRequirementNameText,

       DeviationIncidentRoot._EHSIncident.IncidentCategory,
       
       DeviationIncidentRoot._EHSIncident.IncidentStatus,
       
       DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentTitle,
       @EndUserText.label: 'Incident Timezone'
       DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentTimeZone,
       @EndUserText.label: 'Incident End Timezone'
       DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentEndTimeZone,
       @EndUserText.label: 'Timestamp'
       DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCDateTime,
       @EndUserText.label: 'End Timestamp'
       DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCEndDateTime,
       @EndUserText.label: 'Incident Date'
       DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentDate,
       @EndUserText.label: 'Incident End Date'
       cast(tstmp_to_dats(DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCEndDateTime,
                        $session.user_timezone,$session.client,'INITIAL') as ehhss_inc_end_date preserving type )                                       as IncidentEndDate,

       @Semantics.calendar.yearMonth: true
       cast(substring(tstmp_to_dats(DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCDateTime,
                                    'UTC',$session.client,'INITIAL'),1,6) as ehfnd_yearmonth )                                                          as IncidentUTCYearMonth,

       @Semantics.calendar.yearMonth: true
       @EndUserText.label: 'End Year and Month'
       cast(substring(tstmp_to_dats(DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCEndDateTime,
                                    'UTC',$session.client,'INITIAL'),1,6) as ehfnd_yearmonth )                                                          as IncidentUTCEndDateYearMonth,

       @Semantics.calendar.year: true
       cast(substring(tstmp_to_dats(DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCDateTime,
                                    'UTC',$session.client,'INITIAL'),1,4) as ehfnd_year_code )                                                          as IncidentUTCYear,

       @Semantics.calendar.year: true
       @EndUserText.label: 'End Year'
       cast(substring(tstmp_to_dats(DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.IncidentUTCEndDateTime,
                                    'UTC',$session.client,'INITIAL'),1,4) as ehfnd_year_code )                                                          as IncidentUTCEndDateYear,
       @EndUserText.label: 'Location Key'
       @ObjectModel.foreignKey.association: '_EHSLocationFilter'
       _IncidentBasicInfo.EHSLocationUUID                                                                                                               as EHSLocationUUID,
       _EHSLocationFilter,

       // for authorization
       _IncidentBasicInfo._CurrentEHSParentLocationID,
       _IncidentBasicInfo.IncidentHasAccessRestriction                                                                                                 as IncidentAccessRestriction,
       
       DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.Country,
       DeviationIncidentRoot._EHSIncident._IncidentBasicInfo._Country._Text[1: Language = $parameters.P_Language].CountryName,

       DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.Region,
       @EndUserText.label: 'Region Name'
       DeviationIncidentRoot._EHSIncident._IncidentBasicInfo._Region._RegionText[1: Language = $parameters.P_Language].RegionName,

       DeviationIncidentRoot._EHSIncident._IncidentBasicInfo.Plant,
//    
       _EHSLocationRoot.EHSLocationID,


       @Aggregation.default: #COUNT_DISTINCT
       @Aggregation.referenceElement: ['DeviationUUID']
       cast(0 as ehfnd_number_of_records)                                                                                                                                               as NumberOfRecords,

       /* Associations */
       _EHSLocationRoot,
       _EHSLocationForFiltering,
       _EHSLocation
}

where
  _IncidentGroup.IncidentGroupCode = 'EHHSS_IGR_DEVIATION'
```
