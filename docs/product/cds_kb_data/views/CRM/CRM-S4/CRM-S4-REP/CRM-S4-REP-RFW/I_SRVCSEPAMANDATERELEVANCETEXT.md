---
name: I_SRVCSEPAMANDATERELEVANCETEXT
description: "Srvcsepamandaterelevancetext"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCSEPAMANDATERELEVANCETEXT

**Srvcsepamandaterelevancetext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SrvcSEPAMandateRelevance` | ✓ | |  | `cast(domvalue_l as crm_sepa_on)` |  |  |
| `SrvcSEPAMandateRelevanceText` |  | |  | `ddtext` |  |  |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcSEPAMandateRelevance` | `I_SrvcSEPAMandateRelevance` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISEPASRVRELTEXT'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Service SEPA Mandate Relevance - Text'

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SrvcSEPAMandateRelevance',  
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, 
    #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics: {
    dataExtraction.enabled: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_SrvcSEPAMandateRelevanceText
  as select from dd07t
  association [1..1] to I_SrvcSEPAMandateRelevance as _SrvcSEPAMandateRelevance on $projection.SrvcSEPAMandateRelevance = _SrvcSEPAMandateRelevance.SrvcSEPAMandateRelevance
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                 as Language,

      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
  key cast(domvalue_l  as crm_sepa_on) as SrvcSEPAMandateRelevance,

      @Semantics.text: true
      ddtext                           as SrvcSEPAMandateRelevanceText,

      _SrvcSEPAMandateRelevance,
      _Language
}
where
      dd07t.domname  = 'CRM_SEPA_ON'
  and dd07t.as4local = 'A'
```
