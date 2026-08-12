---
name: I_FINTRANSACCOUNTERPARTYSTDVH
description: "This CDS view provides value help for the Counterparty field. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSACCOUNTERPARTYSTDVH')/$value
semantic_en: "This CDS view provides value help for the Counterparty field. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Counterparty — CDS view giao diện dựa trên I_Ftr_Counterparty."
keywords:
  - "counterparty"
  - "business"
  - "partner"
  - "authorization"
  - "group"
  - "name"
  - "purpose"
  - "completed"
  - "data"
  - "controller"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_FINTRANSACCOUNTERPARTYSTDVH

**This CDS view provides value help for the Counterparty field. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSACCOUNTERPARTYSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` | Business Partner Name |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSACCOUNTERPARTYSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSACCOUNTERPARTYSTDVH')/$value)*

```abap
//GENERATED:001:E6ExH29r7jUzzJ}fF{7DBm
@AbapCatalog.sqlViewName: 'IFTRFTCP__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BusinessPartner'

@ObjectModel: { usageType: {
                  sizeCategory: #XL,
                  serviceQuality: #B,
                  dataClass: #CUSTOMIZING
                },
                modelingPattern: #VALUE_HELP_PROVIDER,
                supportedCapabilities:  [ #VALUE_HELP_PROVIDER ]
              }

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Counterparty'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@Consumption.ranked: true
@Search.searchable: true
define view I_FinTransacCounterPartyStdVH
  as select from I_Ftr_Counterparty
{
      @ObjectModel.text.element:  [ 'BusinessPartnerName' ]
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key BusinessPartner,

      @Consumption.hidden: true
      AuthorizationGroup,
      @Semantics.text: true
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      BusinessPartnerName,
      @Consumption.hidden: true
      @Semantics.booleanIndicator: true
      IsBusinessPurposeCompleted,
      @Consumption.hidden:true
      @UI.hidden:true
      DataControllerSet,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController1,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController2,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController3,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController4,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController5,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController6,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController7,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController8,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController9,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController10
}
```
