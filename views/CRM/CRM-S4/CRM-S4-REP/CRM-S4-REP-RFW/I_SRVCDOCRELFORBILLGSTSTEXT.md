---
name: I_SRVCDOCRELFORBILLGSTSTEXT
description: Srvcdocrelforbillgststext
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
# I_SRVCDOCRELFORBILLGSTSTEXT

**Srvcdocrelforbillgststext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocIsReleasedForBilling` | ✓ | |  | `domvalue_l` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `ServiceDocIsReldForBillingName` |  | |  | `ddtext` |  |  |
| `_SrvcDocIsRelForBillgSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocIsRelForBillgSts` | `I_SrvcDocRelForBillgSts` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
sqlViewName: 'ISERVDOCRELBLSTX',
compiler.compareFilter: true,
preserveKey:true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Rel for Billg Sts of Srvc Trans - Text'

@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
   representativeKey: 'ServiceDocIsReleasedForBilling',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   },
   dataCategory: #TEXT,
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
   #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocRelForBillgStsText
  as select from dd07t
  association [1..1] to I_SrvcDocRelForBillgSts as _SrvcDocIsRelForBillgSts on $projection.ServiceDocIsReleasedForBilling = _SrvcDocIsRelForBillgSts.ServiceDocIsReleasedForBilling
  association [0..1] to I_Language              as _Language                on _Language.Language = $projection.Language
{

      @ObjectModel.foreignKey.association: '_SrvcDocIsRelForBillgSts'
  key domvalue_l as ServiceDocIsReleasedForBilling,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage as Language,
      @Semantics.text: true
      ddtext     as ServiceDocIsReldForBillingName,

      _SrvcDocIsRelForBillgSts,
      _Language
}
where
      domname  = 'CRMS4_STAT_FOR_BILLING'
  and as4local = 'A'
```
