---
name: I_SRVCDOCCREDITSTATUS
description: Srvcdoccreditstatus
app_component: CRM-S4-BF-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - status
  - credit
  - component:CRM-S4-BF-CM-2CL
  - lob:Other
---
# I_SRVCDOCCREDITSTATUS

**Srvcdoccreditstatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SrvcDocCreditStatus` | ✓ | |  | `cast ( domvalue_l as crms4_stat_credit_h )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_SrvcDocCreditStatusText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocCreditStatusText` | `I_SrvcDocCreditStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Credit Status of Service Transaction'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL
}
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
    dataCategory: #VALUE_HELP,
    representativeKey: 'SrvcDocCreditStatus',
    sapObjectNodeType.name: 'SrvcDocCreditStatus',
    usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING},
    resultSet.sizeCategory: #XS,  //render drop down
    supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
}
@Search.searchable: true
@Metadata: {
    ignorePropagatedAnnotations: true
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@AbapCatalog: {
    sqlViewName: 'ISERVCRDTSTS',
    compiler.compareFilter: true,
    preserveKey: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK"] }*/
define view I_SrvcDocCreditStatus
  as select from dd07l

  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] }*/
  association [1..*] to I_SrvcDocCreditStatusText as _SrvcDocCreditStatusText on $projection.SrvcDocCreditStatus = _SrvcDocCreditStatusText.SrvcDocCreditStatus
{
      @ObjectModel.text.association: '_SrvcDocCreditStatusText'
  key cast ( domvalue_l as crms4_stat_credit_h ) as SrvcDocCreditStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      domvalue_l                                 as DomainValue,
      _SrvcDocCreditStatusText
}
where
      domname  = 'CRMS4_STAT_CREDIT_H'
  and as4local = 'A'
```
