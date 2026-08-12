---
name: I_ENVRMTAMOUNTSOVERVIEW
description: "This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTAMOUNTSOVERVIEW')/$value
semantic_en: "This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Amounts Overview with Substance Information — CDS view giao diện dựa trên I_EnvrmtAmountsForActivity."
keywords:
  - "amounts"
  - "overview"
  - "with"
  - "substance"
  - "information"
  - "amount"
  - "business"
  - "area"
  - "country"
  - "region"
  - "data"
  - "usage"
  - "periodicity"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
  - bo:salesorder
---
# I_ENVRMTAMOUNTSOVERVIEW

**This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTAMOUNTSOVERVIEW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` | Data Period of Data Collection Definition |
| `EHSAmountSourceType` |  | |  |  | `CHAR(2)` | Data Source Type |
| `EHSAmountSourceTypeName` |  | |  |  | `CHAR(255)` | Text Field in OTR |
| `EHSAmountUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EHSAmountUTCDate` |  | |  | `cast(tstmp_to_dats(EHSAmountUTCDateTime,'UTC',$session.client,'INITIAL') as datum)` | `DATS(8)` | Date |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `DataPeriodName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `UnitOfMeasureName` |  | |  |  | `CHAR(10)` | Unit of Measurement Short Text with a 10-Character Maximum |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Units of Measurement of Various Types |
| `EHSSubjectName` |  | |  | `case ENVAMNS.EHSSubjectType when '02' then Ehfnd_Physicalparam_Name.name when '03' then Ehfnd_Lisu_Name.name when '04' then Ehfnd_Chemical_Name.name else 'not implemented' end` | `CHAR(1333)` |  |
| `NumberOfRecords` |  | |  | `cast(1 as integer)` | `INT4(10)` | Whole Number with +/- Sign (-2.147.483.648 .. 2.147.483.647) |
| `EHSAmountValue` |  | |  |  | `FLTP(16)` | Amount Value |
| `_BusinessArea` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_UnitText` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTAMOUNTSOVERVIEW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTAMOUNTSOVERVIEW')/$value)*

```abap
@EndUserText.label: 'Amounts Overview with Substance Information'
@Analytics: { dataCategory:#CUBE , dataExtraction.enabled:true }
@VDM.viewType: #COMPOSITE
@AccessControl:
{
  authorizationCheck: #NOT_REQUIRED,
  // blocking of personal data not required (user data can not be blocked and no BP info from user exposed)
  personalData.blocking: #NOT_REQUIRED
}
@AbapCatalog:{
    sqlViewName: 'IENVAMNSOVRVIEW',
    compiler.compareFilter: true,
    preserveKey:true
}


// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

// used for BOBF Master Data Object
@ObjectModel.usageType:{ serviceQuality: #D,        // < 15 msec
                         sizeCategory:  #L,         // < 10.000.000
                         dataClass: #MIXED }
@Metadata.allowExtensions:true

// used for the C1 contract
@Metadata: {
             ignorePropagatedAnnotations: true
           }

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.sapObjectNodeType.name: 'EHSDataAmount'

// Cube for Amounts Overview
define view I_EnvrmtAmountsOverview
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu
  //================================================================================================================
  //================================================================================================================
  //================================================================================================================
  as select from    I_EnvrmtAmountsForActivity( P_Language:$parameters.P_Language ) as ENVAMNS
  // join the listed substance name
    left outer join Ehfnd_Lisu_Name(  p_def_langu:$parameters.P_Language,
                                      p_sy_langu:$parameters.P_Language )     on Ehfnd_Lisu_Name.lisu_root_key = ENVAMNS.EHSSubjectUUID

  //  // join the physical agent name
  //    left outer join Ehhss_Agt_Name( p_def_langu:$parameters.P_Language,
  //                                    p_sy_langu:$parameters.P_Language )       on Ehhss_Agt_Name.agent_root_key = AmountRoot.EHSSubjectUUID


  // join the physical parameter name
    left outer join Ehfnd_Physicalparam_Name( p_def_langu:$parameters.P_Language,
                                    p_sy_langu:$parameters.P_Language )       on Ehfnd_Physicalparam_Name.phpr_root_key = ENVAMNS.EHSSubjectUUID


  // join the chemical agent name in english
    left outer join Ehfnd_Chemical_Name( p_def_langu:$parameters.P_Language,
                                         p_sy_langu:$parameters.P_Language  ) on Ehfnd_Chemical_Name.chm_root_key = ENVAMNS.EHSSubjectUUID
{
  key  EHSAmountUUID,
       BusinessArea,
       //  BusinessAreaName,
       _BusinessArea,
       Country,
       // CountryName,
       _Country,
       Region,
       _Region,
       DataUsagePeriodicity,
       EHSAmountSourceType,
       EHSAmountSourceTypeName,
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
       // ATC check C1 _EHSAmountSourceType,
       EHSAmountUTCDateTime,
       cast(tstmp_to_dats(EHSAmountUTCDateTime,'UTC',$session.client,'INITIAL')
          as datum)       as EHSAmountUTCDate,
       EHSLocationName,
       // ATC check C1 _EHSLocation,
       EHSLocationType,
       // ATC check C1 _EHSLocationType,

       //EHSLocationTypeText,
       // ATC check C1 @Consumption.valueHelpDefinition: [{ entity: { name: 'I_EHSLocationValueHelp', element: 'EHSLocationUUID' }}]
       EHSLocationUUID,
       EHSSubjectType,
       EHSSubjectUUID,

       DataPeriodName,
       Plant,
       // PlantName,
       _Plant,
       UnitOfMeasureName,
       UnitOfMeasure,
       _UnitText,
       case ENVAMNS.EHSSubjectType
           when '02' then Ehfnd_Physicalparam_Name.name
           when '03' then Ehfnd_Lisu_Name.name
           when '04' then Ehfnd_Chemical_Name.name
       //      when '05' then Ehhss_Agt_Name.name
           else 'not implemented'
       end                as EHSSubjectName,
       @DefaultAggregation: #SUM
       cast(1 as integer) as NumberOfRecords,
       @DefaultAggregation: #SUM
       EHSAmountValue

}
```
