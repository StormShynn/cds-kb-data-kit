---
name: I_SRVCSEPAMANDATERELEVANCE
description: "Srvcsepamandaterelevance"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCSEPAMANDATERELEVANCE

**Srvcsepamandaterelevance**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcSEPAMandateRelevance` | ✓ | |  | `cast(domvalue_l as crm_sepa_on )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SrvcSEPAMandateRelevanceText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISEPAMNDSRVREL'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Service SEPA Mandate Relevance'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@ObjectModel: {
                representativeKey: 'SrvcSEPAMandateRelevance',
                //! Code list for the Service SEPA Mandate Relevance
                sapObjectNodeType.name: 'SrvcSEPAMandateRelevance',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE]
               }

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: {
    dataExtraction.enabled: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_SrvcSEPAMandateRelevance
  as select from dd07l
  association [0..*] to I_SrvcSEPAMandateRelevanceText as _Text on $projection.SrvcSEPAMandateRelevance = _Text.SrvcSEPAMandateRelevance
{
      @ObjectModel.text.association: '_Text'
  key cast(domvalue_l as crm_sepa_on ) as SrvcSEPAMandateRelevance,

      _Text
}
where
      dd07l.domname  = 'CRM_SEPA_ON'
  and dd07l.as4local = 'A'
```
