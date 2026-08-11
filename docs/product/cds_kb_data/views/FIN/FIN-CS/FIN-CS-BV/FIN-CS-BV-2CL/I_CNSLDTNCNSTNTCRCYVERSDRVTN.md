---
name: I_CNSLDTNCNSTNTCRCYVERSDRVTN
description: "Drvtn of Cnsldtn Actl Cnstnt Rates Vers"
app_component: FIN-CS-BV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNCNSTNTCRCYVERSDRVTN')/$value
semantic_en: "Drvtn of Cnsldtn Actl Cnstnt Rates Vers"
semantic_vi: "I_CNSLDTNCNSTNTCRCYVERSDRVTN — CDS view tổng hợp dựa trên I_CNSLDTNCNSTNTCRCYVERSDRVTN."
keywords:
  - "cnsldtncnstntcrcyversdrvtn"
  - "consolidation"
  - "comparison"
  - "version"
tags:
  - FIN
  - bo:salesorganization
  - component:FIN-CS-BV-2CL
  - FIN-CS
  - FIN-CS-BV
  - FIN-CS-BV-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNCNSTNTCRCYVERSDRVTN

**Drvtn of Cnsldtn Actl Cnstnt Rates Vers**

| Property | Value |
|---|---|
| App Component | `FIN-CS-BV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNCNSTNTCRCYVERSDRVTN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationComparisonVersion` | ✓ | |  |  | `CHAR(3)` | Comparison Version |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNCNSTNTCRCYVERSDRVTN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNCNSTNTCRCYVERSDRVTN')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@Analytics.technicalName: 'ICSCNSTNTCRCYVERSDRVTN' 
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S
  },
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE ],
  representativeKey: 'ConsolidationComparisonVersion'
}
@VDM: {
  viewType: #COMPOSITE
}
@EndUserText: {
  label: 'Drvtn of Cnsldtn Actl Cnstnt Rates Vers'
}

define view entity I_CnsldtnCnstntCrcyVersDrvtn
  as select distinct from P_CnsldtnComprnVersionDrvtn ( P_Category : 'ACR' )
{
  key ConsolidationComparisonVersion
}
```
