---
name: I_CNDNCONTRBUSVOLSIGN
description: "This CDS view provides the prerequisites for answering questions about condition contract business volume sign. The following fixed values have been maintained: I Inclusive E Exclusive"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRBUSVOLSIGN')/$value
semantic_en: "This CDS view provides the prerequisites for answering questions about condition contract business volume sign. The following fixed values have been maintained: I Inclusive E Exclusive"
semantic_vi: "Condition Contract Business Volume Sign — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "business"
  - "volume"
  - "sign"
  - "cndn"
  - "contr"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRBUSVOLSIGN

**This CDS view provides the prerequisites for answering questions about condition contract business volume sign. The following fixed values have been maintained: I Inclusive E Exclusive**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRBUSVOLSIGN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrBusVolSign` | ✓ | |  | `cast(dd07l.domvalue_l as wcb_bvb_incl_excl )` | `CHAR(1)` | Status Including / Excluding |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRBUSVOLSIGN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRBUSVOLSIGN')/$value)*

```abap
@EndUserText.label: 'Condition Contract Business Volume Sign'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'BusinessVolumeFieldCombnSign',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrBusVolSign',
  modelingPattern:       #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER,
                           #EXTRACTION_DATA_SOURCE],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet.sizeCategory: #XS
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ICCBUSVOLSIGN'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrBusVolSign
  as select from dd07l

  composition [0..*] of I_CndnContrBusVolSignText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wcb_bvb_incl_excl ) as CndnContrBusVolSign,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                             as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WCB_BVB_INCL_EXCL'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
