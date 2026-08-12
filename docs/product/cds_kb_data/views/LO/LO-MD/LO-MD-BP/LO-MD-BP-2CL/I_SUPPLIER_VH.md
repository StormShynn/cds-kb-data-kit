---
name: I_SUPPLIER_VH
description: "Supplier (Value Help)"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - value-help
  - supplier
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIER_VH

**Supplier (Value Help)**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  |  |  |
| `SupplierName` |  | |  | `OrganizationBPName1` |  |  |
| `BusinessPartnerName1` |  | |  |  |  |  |
| `BPSupplierName` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `SupplierAccountGroup` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `BusinessPartnerType` |  | |  |  |  |  |
| `DataControllerSet` |  | |  |  |  |  |
| `DataController1` |  | |  |  |  |  |
| `DataController2` |  | |  |  |  |  |
| `DataController3` |  | |  |  |  |  |
| `DataController4` |  | |  |  |  |  |
| `DataController5` |  | |  |  |  |  |
| `DataController6` |  | |  |  |  |  |
| `DataController7` |  | |  |  |  |  |
| `DataController8` |  | |  |  |  |  |
| `DataController9` |  | |  |  |  |  |
| `DataController10` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPPLIERVH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #BASIC
//@Analytics.dataCategory: #DIMENSION
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'Supplier'

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #VALUE_HELP_PROVIDER,
                                     #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK
//<TODO> Please double-check personal data blocking
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Supplier'
@Consumption.ranked: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_Supplier_VH
  as select from I_Supplier
{
      @ObjectModel.text.element: ['BPSupplierName']
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key I_Supplier.Supplier,

      @EndUserText.label: 'Supplier Name1'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      //@Search.ranking: #HIGH
      @Search.ranking: #LOW
      @EndUserText.quickInfo: 'Supplier Name'
      I_Supplier.OrganizationBPName1 as SupplierName,


      //    For field length increment
      @EndUserText.label: 'Business Partner Name1'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      //@Search.ranking: #HIGH
      @Search.ranking: #LOW
      @EndUserText.quickInfo: 'Business Partner Name1'
      I_Supplier.BusinessPartnerName1, // No Alias name given because view is C1 released

      //          @UI.hidden: true
      //          @Consumption.filter.hidden: true
      @EndUserText.label: 'Business Partner Supplier Name'
      I_Supplier.BPSupplierName,

      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.AuthorizationGroup,

      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.SupplierAccountGroup,

      //added for DCL
      @UI.hidden: true
      @Consumption.filter.hidden: true
      IsBusinessPurposeCompleted,

      @EndUserText.label: 'Business Partner'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      //@Search.ranking: #HIGH
      @Search.ranking: #LOW
      I_Supplier._SupplierToBusinessPartner._BusinessPartner.BusinessPartner,

      @EndUserText.label: 'Business Partner Type'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      //@Search.ranking: #HIGH
      @Search.ranking: #LOW
      I_Supplier._SupplierToBusinessPartner._BusinessPartner.BusinessPartnerType,

      // Fields added For Data Controller in DCL .... NOT TO BE CONSUMED.
      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.DataControllerSet,
      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.DataController1,
      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.DataController2,
      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.DataController3,
      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.DataController4,
      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.DataController5,
      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.DataController6,
      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.DataController7,
      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.DataController8,
      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.DataController9,
      @UI.hidden: true
      @Consumption.filter.hidden: true
      I_Supplier.DataController10

}
```
