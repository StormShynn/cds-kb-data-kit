---
name: I_CUSTOMERCOMPANYVH
description: "Customer CompanyVH"
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
  - customer
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_CUSTOMERCOMPANYVH

**Customer CompanyVH**

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
| `Customer` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `Country` |  | | `_Customer` | `Country` |  |  |
| `BPCustomerName` |  | | `_Customer` | `BPCustomerName` |  |  |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` |  |  |
| `_Customer` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTCOMPVH'
@EndUserText.label: 'Customer Company'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@ObjectModel.semanticKey: ['Customer', 'CompanyCode']
@ObjectModel.representativeKey: 'Customer'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@Consumption.ranked: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@Metadata.ignorePropagatedAnnotations: true

define view I_CustomerCompanyVH
  as select from I_CustomerCompany
{
      @ObjectModel.text.element: ['BPCustomerName']
      @Search: {
           defaultSearchElement: true,
           ranking: #HIGH,
           fuzzinessThreshold: 0.8
          }
      @UI.textArrangement: #TEXT_LAST
  key Customer,
      @ObjectModel.text.element: ['CompanyCodeName']
      @UI.textArrangement: #TEXT_LAST
      @Search: {
           defaultSearchElement: true,
           ranking: #MEDIUM,
           fuzzinessThreshold: 0.8
          }
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      _Customer,
      _Customer.Country,
      @Semantics.text: true      
      _Customer.BPCustomerName,
      @Semantics.text: true   
      _CompanyCode.CompanyCodeName,
      _CompanyCode
}
```
