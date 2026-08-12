---
name: I_CNDNCONTRSUPPLIERSTDVH
description: "This CDS view exposes the values for the supplier condition contracts."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPPLIERSTDVH')/$value
semantic_en: "This CDS view exposes the values for the supplier condition contracts."
semantic_vi: "Supplier Condition Contracts — CDS view tổng hợp dựa trên I_ConditionContract."
keywords:
  - "supplier"
  - "condition"
  - "contracts"
  - "contract"
  - "customer"
  - "prior"
  - "cndn"
  - "contr"
  - "type"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - supplier
---
# I_CNDNCONTRSUPPLIERSTDVH

**This CDS view exposes the values for the supplier condition contracts.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPPLIERSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` | ✓ | |  |  | `CHAR(10)` | Condition Contract |
| `Customer` |  | |  |  | `CHAR(10)` | Customer as Partner of a Condition Contract |
| `PriorSupplier` |  | |  |  | `CHAR(10)` | Prior Supplier |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier as Partner of a Condition Contract |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ExternalDocumentReferenceID` |  | |  |  | `CHAR(30)` | External Document Identifier |
| `CndnContrValidFrom` |  | |  |  | `DATS(8)` | Valid From |
| `CndnContrValidTo` |  | |  |  | `DATS(8)` | Valid To |
| `CndnContrProcessCategory` |  | |  | `cast ( coalesce( Contract._CndnContrClassfctnType.CndnContrProcessCategory, '' ) as wcb_process_category preserving type )` | `CHAR(2)` | Process Category of a Condition Contract |
| `CndnContrProcessCategoryDesc` |  | |  | `Contract._CndnContrClassfctnType._CndnContrProcessCategory._Text[1: Language = $session.system_language ].CndnContrProcessCategoryDesc` | `CHAR(60)` | Description of Condition Contract Process Category |
| `CndnContrClassfctnType` |  | |  |  | `CHAR(2)` | Condition Contract Category |
| `CndnContrClassfctnTypeDesc` |  | |  | `Contract._CndnContrClassfctnType._Text[1: Language = $session.system_language ].CndnContrClassfctnTypeDesc` | `CHAR(40)` | Condition Contract Category Text |
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Worker as Partner of a Condition Contract |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CndnContrWorkerCostCenter` |  | |  |  | `CHAR(10)` | Worker Cost Center |
| `_CndnContrProcessCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnContrProcessCategory` | `I_CndnContrProcessCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPPLIERSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPPLIERSTDVH')/$value)*

```abap
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   dataCategory:          #VALUE_HELP,
   representativeKey:    'ConditionContract',
   modelingPattern:       #VALUE_HELP_PROVIDER,
   supportedCapabilities: [#VALUE_HELP_PROVIDER,#SEARCHABLE_ENTITY],
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #C,
     sizeCategory:   #XXL
   }
}
@Analytics.technicalName: 'ICCSUPLSVH'
@Analytics: {
    internalName: #LOCAL
}
@EndUserText.label: 'Supplier Condition Contracts'
@Metadata.ignorePropagatedAnnotations: true
@UI.textArrangement: #TEXT_FIRST
@Search.searchable: true
@Consumption.ranked: true

define view entity I_CndnContrSupplierStdVH

  as select from I_ConditionContract as Contract
    inner join   I_CndnContrType     as ContractType on Contract.CndnContrType = ContractType.CndnContrType

  association [0..1] to I_CndnContrProcessCategory as _CndnContrProcessCategory on $projection.CndnContrProcessCategory = _CndnContrProcessCategory.CndnContrProcessCategory

{
      //    Facets for Searchable Fields
      @UI.facet: [{ purpose: #FILTER, type: #FIELDGROUP_REFERENCE, targetQualifier: 'FILTER_BASIC',    label: 'Contract Information'  },
                  { purpose: #FILTER, type: #FIELDGROUP_REFERENCE, targetQualifier: 'FILTER_VALIDITY', label: 'Contract Validity' }]

      @UI: {
            lineItem:       [{ position: 10, importance:#HIGH }],
            fieldGroup:     [{ qualifier:'FILTER_BASIC', position: 10}]
          }
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1.0
      @Search.ranking: #HIGH
  key Contract.ConditionContract,

      @Consumption.hidden: true
      Contract.Customer,
      @Consumption.hidden: true
      Contract.PriorSupplier,
      @Consumption.hidden: true
      Contract.Supplier,
      @UI: {
            lineItem:       [{ position: 30, importance:#HIGH }],
            fieldGroup:     [{ qualifier:'FILTER_BASIC', position: 20}],
            textArrangement: #TEXT_FIRST
          }
      @ObjectModel.text.element:  [ 'CndnContrTypeDesc' ]
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      Contract.CndnContrType,
      @UI: {
            lineItem:       [{ position: 40, importance:#HIGH }]
          }
      @Semantics.text:true
      @Consumption.filter.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      Contract._CndnContrType._Text[1: Language = $session.system_language ].CndnContrTypeDesc,

      @Consumption.hidden: true
      Contract.DistributionChannel,
      @Consumption.hidden: true
      Contract.Division,
      @Consumption.hidden: true
      Contract.PurchasingGroup,
      @Consumption.hidden: true
      Contract.PurchasingOrganization,
      @Consumption.hidden: true
      Contract.SalesOrganization,
      @UI: {
            lineItem:       [{ position: 20, importance:#HIGH }],
            fieldGroup:     [{ qualifier:'FILTER_BASIC', position: 30}]
          }
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      Contract.ExternalDocumentReferenceID,
      @UI: {
            lineItem:       [{ position: 50, importance:#HIGH }],
            fieldGroup:     [{ qualifier:'FILTER_VALIDITY', position: 10}]
          }
      @Semantics.businessDate.from: true
      Contract.CndnContrValidFrom,
      @UI: {
            lineItem:       [{ position: 60, importance:#HIGH }],
            fieldGroup:     [{ qualifier:'FILTER_VALIDITY', position: 20}]
          }
      @Semantics.businessDate.to: true
      Contract.CndnContrValidTo,
      @UI: {
            fieldGroup:     [{ qualifier:'FILTER_BASIC', position: 30}],
            textArrangement: #TEXT_FIRST
          }
      @Consumption.valueHelpDefinition:[{association:'_CndnContrProcessCategory'}]
      @ObjectModel: {
          text.element:  [ 'CndnContrProcessCategoryDesc' ]
          }
      cast ( coalesce( Contract._CndnContrClassfctnType.CndnContrProcessCategory, '' ) as wcb_process_category preserving type )             as CndnContrProcessCategory,
      @Semantics.text: true
      @Consumption.hidden: true
      Contract._CndnContrClassfctnType._CndnContrProcessCategory._Text[1: Language = $session.system_language ].CndnContrProcessCategoryDesc as CndnContrProcessCategoryDesc,

      @Consumption.hidden: true
      @ObjectModel.text.element: ['CndnContrClassfctnTypeDesc']
      @UI.textArrangement: #TEXT_FIRST
      Contract.CndnContrClassfctnType                                                                                                        as CndnContrClassfctnType,

      @Semantics.text: true
      @Consumption.hidden: true
      Contract._CndnContrClassfctnType._Text[1: Language = $session.system_language ].CndnContrClassfctnTypeDesc                             as CndnContrClassfctnTypeDesc,

      /* Worker related fields */
      @Consumption.hidden: true
      Contract.PersonWorkAgreement,
      @Consumption.hidden: true
      Contract.CompanyCode,
      @Consumption.hidden: true
      Contract.CndnContrWorkerCostCenter,

      @Consumption.hidden: true
      Contract._Customer,
      @Consumption.hidden: true
      Contract._PriorSupplier,
      @Consumption.hidden: true
      Contract._Supplier,
      @Consumption.hidden: true
      Contract._PersonWorkAgreement,
      Contract._CndnContrClassfctnType,
      _CndnContrProcessCategory
}
where
     ContractType.CndnContrPartnerCat  = 'V'
  or ContractType.CndnContrSettlmtType = '1'
```
